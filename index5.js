 function numbers(a, b) {
    if (a>b) {
        return b;
    } 
    else {
        return a;
    } 
}

function numer(c) {
    if (c % 2 == 0) {
        return 'Число четное';
        
    } else {
        return 'Число нечетное';
    }
} 
 
function quad(d) {
    console.log(d**2)
}

function howOld ()
let age = prompt(`Сколько Вам лет?`);

if (age < 0){
    alert ('Вы ввели неверное');
}
else if (age <= 12){
    alert ('Привет, друг');
}
else{
    alert('Добро пожаловать');
}

function multNumbers(k , l) {
    if (isNan(k)|| isNan(l)) {
        return 'одно или оба значения не являются числом';    
    }
    else {
        return k*l;
    }
}

function cubeNumber(){
    let number = prompt ('Введите число')
    num = Number(num);
    if (isNan(num)){
        return 'Переданный параметр не является числом';       
    }
    else {
        return ${num} в кубе равняется ${num**3};

    }
}


function getArea(){
    return Math.PI *this.radius**2;
}
function getPerimetr(){
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius:10,
    getArea,
    getPerimetr,
};

const circle2 = {
    radius:15,
    getArea,
    getPerimetr,
};

circle2*getPerimetr()

function getSeason(month){
    if (month >= 3 && month <= 5){
        return 'весна';
    }
    else if (month >= 6 && month <= 8){
        return 'лето';
    }
    else if (month >= 9 && month <= 11){
        return 'осень';
    }
    else if (month == 12|| month ==1 || month = 2){
        return 'зима';
    }
    else {
        return 'Неизвестное значение'
    }

}
