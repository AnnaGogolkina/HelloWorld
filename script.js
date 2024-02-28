let a = 10;
alert (a);

a = 20;
alert (a);

const iphone = 2007;
console.log (iphone);

let creator = 'Brendan Eich';
console.log (creator);

let c = 10;
let d = 2;
console.log (c + d);
console.log (c - d);
console.log (c * d);
console.log (c / d);

let result = 2**5;
alert (result);


let k = 9;
let l = 2;
let resultNew = k % l;
alert (resultNew);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert (num);

let age = prompt (`Сколько Вам лет?`);
alert (age);

const user = {
    name:'Ann',
    age: 20 ,
    isAdmin: true
    
};

user["city of residence"] =  'Saint-Petersburg';

delete user["city of residence"];

user.age = 35;

let info = prompt (`Какую информацию хотите узнать о пользовтеле?`)
alert (user[info]);

let userName = prompt(`Как Вас зовут?`)
alert (`Привет, ${userName}!`)