const input = document.querySelector(".form-add__input")
const addButton = document.querySelector(".form-add__btn")
const container = document.querySelector(".tasks")
const searchInput = document.querySelector(".toolbar__input")
const footer = document.querySelector(".footer-controls")
const sortSelect = document.querySelector(".toolbar__sort")
const tabButtons = document.querySelectorAll(".tabs__item")
const clearButton = document.querySelector(".footer-controls__clear")
const form = document.querySelector(".form-add")
const tasks = [
    {
        date: "Сегодня, 10:00",
        text: "Проверить и ответить на важные электронные письма",
        done: true
    },
    {
        date: "Сегодня, 14:30",
        text: "Провести встречу с командой разработки по планированию спринта",
        done: false
    },
    {
        date: "Завтра, 09:15",
        text: "Подготовить презентацию для клиентского совещания",
        done: false
    },
    {
        date: "Завтра, 12:00",
        text: "Отправить отчёт по продажам за прошлую неделю",
        done: true
    },
    {
        date: "12 мая, 16:00",
        text: "Обновить документацию по API",
        done: false
    },
    {
        date: "11 мая, 13:45",
        text: "Протестировать новую версию мобильного приложения",
        done: true
    },
    {
        date: "Сегодня, 18:00",
        text: "Запланировать отпуск на следующий квартал",
        done: false
    }
];


form.addEventListener("submit", (event) => {
    event.preventDefault()
    addTask()
})

function addTask() {
    const text = input.value.trim()
    if (text === "" || text.length < 3) {
        input.classList.add("input--error")
        return
    }

    input.classList.remove("input--error")

    const newTask = {
        id: tasks.length + 1,
        text: text,
        done: false,
        date: "Завтра 11.04.26"
    }
    tasks.push(newTask)

    input.value = ""

    renderAll()
}
function renderTask(task) {
    const item = document.createElement("div")
    item.classList.add("task")

    const content = document.createElement("div")
    content.classList.add("task__content")


    const title = document.createElement("div")
    title.classList.add("task__title")
    title.textContent = task.text

    const meta = document.createElement("div")
    meta.classList.add("task__meta")
    meta.textContent = task.date

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

    editBtn.addEventListener("click", () => {
        const newText = prompt("Изменить задачу: ", task.text)
        if (newText && newText.trim() !== '') {
            task.text = newText.trim()
            renderAll()
        }
        console.log(newText, task.text)
    })

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

    deleteBtn.addEventListener("click", () => {
        const index = tasks.indexOf(task)
        tasks.splice(index, 1)
        renderAll()
    })

    actions.append(editBtn, deleteBtn)
    item.append(content, actions)

    if (task.done) {
        item.classList.add("task--done")
    }
    item.addEventListener("click", (e) => {
        if (e.target.closest(".task__action")) return;
        task.done = !task.done
        console.log(task.done)
        renderAll()
    })
    return item;
}

function renderAll() {
    document.querySelectorAll(".task").forEach(t => t.remove())
    tasks.forEach((task) => {
        const card = renderTask(task)
        footer.before(card)
    })
}

renderAll()