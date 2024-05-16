//задание 1
let str = 'math';
let strToUpperCase = str.toUpperCase();
console.log(strToUpperCase);

//задание 2
const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
'Груша Конференция'];

const search = 'молоко';

products.forEach((product) => {
   if (product.toLowerCase().startsWith(search.toLowerCase())) {
      console.log(product);
   }
});

//задание 3

console.log(Math.floor(32.58842));

console.log(Math.ceil(32.58842));

console.log(Math.round(32.58842));


//задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//задание 5
function random() {
   return Math.floor(Math.random() * 10);
}
console.log(random());

//задание 6
function functionRandom(n) {
   let arr =[]
   const length = Math.floor(n/2)

   for(let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random()* n))
   }
   return arr
}
console.log(functionRandom(7));
console.log(functionRandom(12));

//задание 7

function gc(min, max) {
   return Math.floor(Math.random() + (max - min + 1) + min);
}
console.log(gc(2, 50));

//заданрие 8

let dateNow = new Date();
console.log(dateNow);

//задание 9 

let currentDate = newDate();
currentDate.setDate(currentDate.setDate() + 73)

console.log(currentDate);

//задание 10

function getMyDate(fullDate) {
   const months = ['Январь', 'Февраль','Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
   const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
   let myDate = new Date();

   return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} Время: ${myDate.getHours()} ${myDate.getMinutes()} ${myDate.getSeconds()}`;

}

console.log(getMyDate())

//задание 11

function fruitsRemember() {
   let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
   fruits.sort(() => Math.random - 0.5) 
      alert(fruits);
   
   let answerFirst = prompt("Назовите первый фрукт из списка")
   let answerSecond = prompt("назовите второй фрукт из списка")
   
   
   if ( !answerFirst || !answerSecond ||isNan(answerFirst) || isNaN(answerSecond)) {
      alert ("Введите корректное значение");
   } else if (answerFirst === fruits[0] && answerSecond === fruits[fruits.length -1]) {
      alert ("Поздравляем! Вы угадали оба слова");
   } else if (answerFirst === fruits[0] || answerSecond === fruits[fruits.length -1]) {
      alert ("Вы были близки к правильному ответу");
   } else {
      alert ("К сожалению, Вы ответили неверно. Попробуйте еще раз");
   }
   }
