const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || {
  todo: [],
  "in progress": [],
  done: [],
};

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
        <h3 class="task__title">Разработать API авторизации</h3>
        ${
          task.descr
            ? `<p class="task-kanban__descr">
                ${task.descr}
            </p>`
            : ""
        }
            
        <div class="task-kanban__footer">
            <span class="task-kanban__priority ${task.priority}">${task.priority}</span>
            <span class="task-kanban__deadline">${task.deadline}</span>
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

renderBoard();
