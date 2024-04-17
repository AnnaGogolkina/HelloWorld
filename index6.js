//задание 1
const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] === 10) break;
}

//задание 2
console.log(numbers.indexOf(4));

//задание 3
const array = [1, 3, 5, 10, 20];
const arrayJoin = array.join(" ");

console.log(arrayJoin);

//задание 4
const arr = [];
for (let i = 0; i < 3; i++) {
  const newArr = [];
  for (let j = 0; j < 3; j++) {
    newArr.push(1);
  }
  arr.push(newArr);
}

//задание5

const numberOne = [1, 1, 1];
numberOne.push(2, 2, 2);
console.log(numberOne);

//задание 6
const a = [9, 8, 7, "a", 6, 5];

let b = a.sort();
console.log(b.pop());
console.log(b);

//задание 7
const c = [9, 8, 7, 6, 5];
let answerUser = prompt("Назовите любое число массива");

if (answerUser !== null || answerUser.trim() === "") {
  answerUser = Number(answerUser);
  if (!isNaN(answerUser) && c.includes(answerUser)) {
    alert("Угадал");
  } else {
    alert("Не угадал");
  }
}

//задание 8

let d = "abcdef";
let e = d.split("").reverse().join("");
console.log(e);

//задание 9
const arrNow = [
  [1, 2, 3],
  [4, 5, 6],
];
const flatArr = arrNow.flat();
console.log(flatArr);

//задание 10
let numers = [3, 7, 1, 9, 4, 2, 5, 8, 6, 10];
for (let i = 0; i < numers.length - 1; i++) {
  console.log(numers[i] + numers[i + 1]);
}

//задание 11
const arrayEl = [3, 5, 9, 15];
function squares(arrayEl) {
  return arrayEl.map((element) => element ** 2);
}
console.log(squares(arrayEl));

//задание 12
const array12 = ["mir", "home", "cat"]
function str(array) {
  return array.map((element) => String(element).length);
}
console.log(str(array12));

//задание 13 
let array13 = [2, -8, 4, -7]
function negative(array) {
  return array.filter((element) => element < 0);
}
console.log(negative(array13));


//задание14
const arrayFloor = [...Array(10)].map((element) =>
  Math.floor(Math.random() * 10)
);
const arrayNew = arrayFloor.filter((element) => element % 2 === 0);

console.log(arrayFloor);
console.log(arrayNew);

//задание 15
const mapArray = [...Array(6)].map((element) => Math.ceil((Math.random() * 9) + 1));
const sum = mapArray.reduce((total, number) => total + number, 0);
console.log(sum / mapArray.length);
