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
