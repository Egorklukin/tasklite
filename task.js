const now = new Date();
console.log(now);

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

console.log(`${day}.${month}.${year}`);

const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

console.log(`${h}:${m}:${s}`);

console.log(now.toLocaleString());

const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const dayName = days[now.getDay()];

console.log(dayName);

let timeOfDay;

if (h > 5 && h < 12) {
  timeOfDay = "Утро";
} else if (h >= 12 && h < 17) {
  timeOfDay = "День";
} else if (h >= 17 && h < 21) {
  timeOfDay = "Вечер";
} else {
  timeOfDay = "Ночь";
}

console.log(timeOfDay);

let tasksInTask = [
  { text: "Проверить и ответить на важные электронные письма" },
  { text: "Провести встречу с командой разработки по планированию спринта" },
  { text: "Подготовить презентацию для клиентского совещания" },
  { text: "Отправить отчёт по продажам за прошлую неделю" },
  { text: "Обновить документацию по API" },
  { text: "Протестировать новую версию проекта" },
  { text: "Запланировать проект на следующий месяц" },
];

tasksInTask = tasksInTask.filter((task) =>
  task.text.toLowerCase().includes("проект"),
);

console.log(tasksInTask);

const comments = [
  { user: " Alice ", text: " Hello everyone! " },
  { user: "BOB", text: "<b>Nice post</b>" },
  { user: "   ", text: "I am invisible user" }, // пустой user → игнор
  { user: "Charlie", text: "   " }, // пустой текст → игнор
  { user: null, text: "Hi!" }, // user невалидный → игнор
  { user: "dave", text: "<script>alert(1)</script>" }, // XSS попытка
  { user: "Eve", text: "   Good job!   " },
  { user: "ALICE", text: "Second comment" }, // тот же пользователь в другом регистре
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&apm")
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt");
}

// tasks 1-3 L#37

function formatComments(comments) {
  const results = [];

  for (let com of comments) {
    const user = String(com.user || "")
      .trim()
      .toLowerCase();
    const text = String(com.text || "")
      .trim()
      .toLowerCase();
    if (!text || !user) continue;

    const saveText = escapeHtml(text);

    results.push(user + ": " + saveText);
  }
  return results;
}

console.log(formatComments(comments));

const tags = " JS, react, <script>, node ".split(",");

console.log(tags);

function formaterTags(tags) {
  const result = [];

  for (let tag of tags) {
    const formatTag = escapeHtml(tag.trim().toLowerCase());

    if (result.includes(formatTag)) continue;

    result.push(formatTag);
  }
  return result;
}

console.log(formaterTags(tags));

function generateHtml(tags) {
  let html = `<ul>`;
  for (let tag of tags) {
    html += `<li>${tag}</li>`;
  }
  html += `</ul>`;
  return html;
}

console.log(generateHtml(formaterTags(tags)));

const messages = [
  { text: "Hello world" },
  { text: "<b>Important</b> message" },
  { text: "error happened" },
];
function searchWord(messages, word) {
  const results = [];
  for (let mesage of messages) {
    const mes = String(mesage) || "";
    if (mes.text.toLowerCase().includes(word.toLowerCase()))
      results.push(escapeHtml(mes.text));
  }
  return results;
}
/* 
console.log(searchWord(messages, "hfgh")); */

//tasks 1 L#36

const tasks = [
  { title: "Task 1", deadline: "2026-04-10", status: " done " },
  { title: "Task 2", deadline: "2026-04-01", status: "PENDING" },
  { title: "Task 3", deadline: "2026-03-28", status: " pending " },
];

function getTasks(tasks) {
  const title = "";
  const results = new Map();
  for (let task of tasks) {
    if (!task.status.toLowerCase().trim().includes("done")) {
      const now = new Date();
      const deadline = new Date(task.deadline);
      const difference = deadline - now;
      results[task.title] = results.set(task.title, deadline);
    }
    return results;
  }
}

/* console.log(getTasks(tasks)); */

// HW#18

const str = "as ssd Sa";

function normalizeWords(str) {
  const clean = String(str || "").trim();
  const words = clean.split(" ");
  const result = [];
  for (let word of words)
    result.push(
      word[0].toUpperCase() + word.substring(1, word.length).toLowerCase(),
    );
  return result.join(" ");
}
console.log(normalizeWords(str));
