const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || {
  todo: [],
  "in progress": [],
  done: [],
};

document.querySelectorAll(".column__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const column = btn.closest(".column");
    const status = column.dataset.status;

    const title = prompt("Введите название задачи") || "";
    const clearTitle = title.trim();
    if (!clearTitle) return;
    const descr = prompt("Введите описание задачи") || "";
    const priority = prompt("Введите приоритет(Высокий/Средний/Низкий");
    const deadline = prompt("Срок: dd.mm") || "";

    const clearDescr = descr.trim();
    const clearDeadline = deadline.trim();
    const clearPriority = normalizePriority(priority);

    boardData[status].push({
      title: clearTitle,
      descr: clearDescr,
      deadline: clearDeadline,
      priority: clearPriority,
    });
    renderBoard();
  });
});

function normalizePriority(value) {
  const v = String(value || "")
    .trim()
    .toLowerCase();
  if (["h", "high", "выс", "в", "высокий"].includes(v)) return "high";
  if (v.includes("н") || v.includes("l")) return "low";
  if (v.includes("м") || v.includes("m")) return "medium";
  return "medium";
}

function priorityLabel(level) {
  return level === "high"
    ? "Высокий приоритет"
    : level === "low"
      ? "Низкий приоритет"
      : "Средний приоритет";
}

function renderBoard() {
  columns.forEach((column) => {
    const status = column.dataset.status;
    const taskList = column.querySelector(".column__tasks");

    taskList.innerHTML = "";

    boardData[status].forEach((task, index) => {
      const el = document.createElement("div");
      el.className = "column__task task-kanban";
      el.dataset.index = index;
      el.innerHTML = `
        <h3 class="task__title">${escapeHtml(task.title)}</h3>
        ${
          task.descr
            ? `<p class="task-kanban__descr">
                ${escapeHtml(task.descr)}
            </p>`
            : ""
        }
            
        <div class="task-kanban__footer">
            <span class="task-kanban__priority ${task.priority}">${priorityLabel(task.priority)}</span>
            <span class="task-kanban__deadline">${escapeHtml(task.deadline)}</span>
        </div
      `;
      taskList.appendChild(el);
    });
    updateCount(column);
  });
  localStorage.setItem("kanban-data", JSON.stringify(boardData));
}

function updateCount(column) {
  const countEl = column.querySelector(".column__counter");
  const status = column.dataset.status;
  countEl.textContent = boardData[status].length;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&apm")
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt");
}

renderBoard();
