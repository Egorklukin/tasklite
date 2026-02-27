const input = document.querySelector(".form-add__input")
const addButton = document.querySelector(".form-add__btn")
const container = document.querySelector(".tasks")
const searchInput = document.querySelector(".toolbar__input")
const footer = document.querySelector(".footer-controls")
const sortSelect = document.querySelector(".toolbar__sort")
const tabButtons = document.querySelectorAll(".tabs__item")
const clearButton = document.querySelector(".footer-controls__clear")
function renderTask(taskData) {
    const task = document.createElement("div")
    task.classList.add("task")

    const content = document.createElement("div")
    content.classList.add("task__content")

    task.append(content)

    const title = document.createElement("div")
    title.classList.add("task__title")
    title.textContent = taskData.text

    const meta = document.createElement("div")
    meta.classList.add("task__meta")
    meta.textContent = taskData.date

    content.append(title, meta)

    const actions = document.createElement("div")
    actions.classList.add("task__actions")
    const editBtn = document.createElement("button")
    editBtn.classList.add("task__action", "task__action--edit")
    editBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6f64a3"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>`

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("task__action", "task__action--delete")
    deleteBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14 " height="14" fill="none" stroke="#cb6e6e"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    </svg>`

    actions.append(editBtn, deleteBtn)
    task.append(content, actions)

    return task
}

const task1 = renderTask({
    text: "Сходить в строительный магазин",
    date: "Завтра в 12:30"
})

const task2 = renderTask({
    text: "Выгулять кошку",
    date: "Сегодня в 12:30"
})

container.append(task1, task2)

