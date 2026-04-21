const columns = document.querySelectorAll(".column");

let draggedTask = null;
let sourceStatus = null;

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || {
  todo: [],
  "in-progress": [],
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
    const priority = prompt("Введите приоритет(Высокий/Средний/Низкий") || "";
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
  if (v.includes("в") || v.includes("h")) return "high";
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderBoard() {
  columns.forEach((column) => {
    const status = column.dataset.status;
    const taskList = column.querySelector(".column__tasks");

    if (!taskList || !boardData[status]) return;

    taskList.innerHTML = boardData[status].length === 0 ? `<div class="placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <title>Blank-notepad SVG Icon</title>
                <g fill="none">
                  <path
                    fill="#d7e0ff"
                    d="M12.5 2h-11a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
                  />
                  <path
                    stroke="#4147d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 3.5v-3m3 3v-3m3 3v-3M12.5 2h-11a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
                  />
                </g>
              </svg>
              <h3 class="placeholder__descr">Здесь будут ваши задачи</h3>
            </div>` : "";
    console.log(boardData[status]);

    boardData[status].forEach((task, index) => {
      const el = document.createElement("div");
      el.className = "column__task task-kanban";
      el.dataset.index = index;
      el.draggable = true;
      el.innerHTML = `
        <h3 class="task__title">${escapeHtml(task.title)}</h3>
        ${task.descr
          ? `<p class="task-kanban__descr">
                ${escapeHtml(task.descr)}
            </p>`
          : ""
        }
            
        <div class="task-kanban__footer">
            <span class="task-kanban__priority ${task.priority}">${priorityLabel(task.priority)}</span>
            <span class="task-kanban__deadline">${escapeHtml(task.deadline)}</span>
        </div>
      `;
      addDragEvents(el);
      taskList.appendChild(el);
    });
    updateCount(column);
    console.log(boardData[status].length);
  });
  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

function updateCount(column) {
  const countEl = column.querySelector(".column__counter");
  const status = column.dataset.status;
  countEl.textContent = `Всего задач: ${boardData[status].length}`;
}

function addDragEvents(taskEl) {
  taskEl.addEventListener("dragstart", (e) => {
    draggedTask = taskEl;
    sourceStatus = taskEl.closest(".column").dataset.status;
    taskEl.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });
  taskEl.addEventListener("dragend", () => {
    if (draggedTask) draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
  columns.forEach((column) => {
    const taskList = column.querySelector(".column__tasks");

  if (!taskList) return;

  taskList.addEventListener("dragover", (e) => {
    e.preventDefault();
    column.classList.add("drag-over");
  });
  taskList.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });
  taskList.addEventListener("drop", (e) => {
    e.preventDefault();
    column.classList.remove("drag-over");

    const targetStatus = column.dataset.status;

    if (!draggedTask) return;

    const index = +draggedTask.dataset.index;
    if (!boardData[sourceStatus]?.[index]) return;
    const movedTask = boardData[sourceStatus][index];

    boardData[sourceStatus].splice(index, 1);

    boardData[targetStatus].push(movedTask);

    renderBoard();
  });
});


function addDragEvents(taskEl) {
  taskEl.addEventListener("dragstart", (e) => {
    draggedTask = taskEl;
    sourceStatus = taskEl.closest(".column").dataset.status;
    taskEl.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });
  taskEl.addEventListener("dragend", () => {
    if (draggedTask) draggedTask.classList.remove("dragging");
    draggedTask = null;
  });


function addDragEvents(taskEl) {
  taskEl.addEventListener("dragstart", (e) => {
    draggedTask = taskEl;
    sourceStatus = taskEl.closest(".column").dataset.status;
    taskEl.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
  });
  taskEl.addEventListener("dragend", () => {
    if (draggedTask) draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
}

renderBoard();
