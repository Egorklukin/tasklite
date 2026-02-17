let a = 1;
let b = 0;
let sum = a + b;
let difference = a - b;

console.log("сумма " + sum);
console.log("разность " + difference);
/* lesson 2*/
let title = "";
if (title === "") {
    console.log("Заголовок пустой")
} else {
    console.log("title: " + title)
}

let tasks_count = 7;

if (tasks_count === 0) {
    console.log("Список пуст, можно отдыхать");
} else if (tasks_count > 0 && tasks_count <= 3) {
    console.log("Есть задачи для выполнения");
} else if (tasks_count > 3) {
    console.log("Список задач переполнен");
}

let isCompleted;

if (isCompleted === true) {
    console.log("Задача выполнена")
} else {
    console.log("Задача ещё в работе")
}

let urgent;

if (tasks_count > 0 && urgent > 0) {
    console.log("Есть срочные задачи")
} else if (tasks_count > 0 && urgent === 0) {
    console.log("Задачи есть, но они не срочные")
} else if (tasks_count === 0) {
    console.log("Все задачи завершены")
}
let isAdmin;
let isModerator;

if (isAdmin === true || isModerator === true) {
    console.log("Доступ разрешён")
} else {
    console.log("Доступ запрещён")
}

let amount = 0;

if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log("Скидка 10%");
}
/* lesson 3*/
function summa(a, b) {
    return a + b;
}
console.log("суммы: " + summa(2, 3), summa(4, 1))

function isTaskDone(status) {
    return status === "выполнена"
}

let result = isTaskDone("выполнена")

console.log(result)

function taskSummary(total, done) {
    let active = total - done
    return "Всего: " + total + "| Активных: " + active + "| Выполненых: " + done
}

console.log(taskSummary(6, 3))

/* lesson 4*/

let cities = ["Нарьян-Мар", "Уфа", "Новороссийск"]

cities[1] = "Киров"
console.log(cities)

let task = {
    id: 1,
    title: "накормить собаку",
    status: "активна"
}
console.log(task.title)
task.status = "выполнена"
console.log(task.status)

let tasks1 = [
    {
        id: 1,
        title: "накормить собаку",
        status: "активна"
    },
    {
        id: 2,
        title: "купить лопату",
        status: "выполнена"
    },
    {
        id: 3,
        title: "сходить в стр. магазин",
        status: "не активна"
    },
    {
        id: 4,
        title: "накормить кота",
        status: "активна"
    },
    {
        id: 5,
        title: "купить топор",
        status: "выполнена"
    },
    {
        id: 6,
        title: "сходить в хоз. магазин",
        status: "не активна"
    },
]
console.log(tasks1[0].title)
console.log(tasks1[1].status)

let user = {
    name: "Иван",
    tasks: tasks1
}
console.log(user)

function findTaskByTitle(tasks, title) {
    for (let i = 0; i < tasks.lenght; i++) {
        if (tasks[i].title === title) {
            return tasks[i]
        }
    }
    return "Задача не найдена"
}

console.log(findTaskByTitle(tasks1, "купить лопату"))


function filterByStatus(tasks, status) {
    return tasks.filter(function (task) {
        return task.status === status;
    })
}
console.log(filterByStatus(tasks1, "активна"))

function sortByTitle(tasks) {
    tasks.sort(function(a, b) {
        if (a.title > b.title) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        }
        return 0
    })
    return tasks
}

console.log(sortByTitle(tasks1))

function searchByTitle(tasks, query) {
    let q = query.toLowerCase();
    return tasks.filter(task =>
        task.title.toLowerCase().indexOf(q) !== -1
    )
}

console.log(searchByTitle(tasks1, "ку"))

for (let i = 0; i < tasks1.length; i++) {
    console.log(tasks1[i].id + ":" + tasks1[i].title)
}

for(let task of tasks1) {
    console.log(task.id + ":" + task.title)
}

let i = 0
let total = 0
let active = 0
let done = 0

while (i < tasks1.length) {
    total++
    if (tasks1[i].status === "выполнена") {
        done++
    } else {
        active++
    }
    i++
}

console.log("Всего: " + total + " | Активных: " + active + " | Выполненых: " + done)

for (let task of tasks1) {
    if (task.status === "активна") {
        console.log("Активная задача: " + task.title)
    }
}

tasks1.forEach(task => {
    console.log("#" + task.id + " " + task.title + " (" + task.status + ")")
})

let searchTitle = "купить лопату"
let found = null
for (let task of tasks1) {
    if (task.title === searchTitle) {
        found = task
        break
    }
}

if (found) {
    console.log("Найденая задача: ", found)
} else {
    console.log("Задача не найдена")
}

function findTaskByKeyword(tasks, keyword) {
  const lowerKeyword = keyword.toLowerCase()
  for (const task of tasks) {
    if (task.title.toLowerCase().includes(lowerKeyword)) {
      return task;
    }
  }
  return "Задача не найдена"
}

console.log(findTaskByKeyword(tasks1, "соба"))