let a = 1;
let b = 0;
let sum = a + b;
let difference = a - b;

console.log("сумма " + sum);
console.log("разность " + difference);

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