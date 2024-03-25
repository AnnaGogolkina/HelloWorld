let a = 0;
while (a < 2) {
  console.log("Привет");
  a++;
}
let d = 0;
while (d <= 5) {
  console.log(d);
  d++;
}

let i = 7;
while (i >= 7 && i <= 22) {
  console.log(i);
  i++;
}

const object = {
  name: "Kolia",
  salary: "200",
};
for (let key in object) {
  console.log(`${key}: ${object[key]}`);
}

let n = 1000;
let m = 2;
let num = 0;
do {
  n /= m // n = n / m
  num++;
}
while (n >= 50);
console.log(n);
  console.log(num);


let firstFriday = 5;
for (let day = firstFriday; day < 31; day += 7)
  console.log(`Сегодня пятница, ${day} - число. Необходимо подготовить отчет`);
