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

let tasks = 7;

if (tasks === 0) {
    console.log("Список пуст, можно отдыхать");
} else if (tasks > 0 && tasks <= 3) {
    console.log("Есть задачи для выполнения");
} else if (tasks > 3) {
    console.log("Список задач переполнен");
}

let isCompleted;

if (isCompleted === true) {
    console.log("Задача выполнена")
} else {
    console.log("Задача ещё в работе")
}

let urgent;

if (tasks > 0 && urgent > 0) {
    console.log("Есть срочные задачи")
} else if (tasks > 0 && urgent === 0) {
    console.log("Задачи есть, но они не срочные")
} else if (tasks === 0) {
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