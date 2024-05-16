function fruitsRemember() {
    
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5)
       alert(fruits);
    
    let answerFirst = prompt("Назовите первый фрукт из списка")
    let answerSecond = prompt("назовите последний фрукт из списка")
    
    
    if ( !answerFirst || !answerSecond) {
       alert ("Введите корректное значение");
    } else if (answerFirst === fruits[0].toLowerCase() && answerSecond === fruits[fruits.length - 1].toLowerCase()) {
       alert ("Поздравляем! Вы угадали оба слова");
    } else if (answerFirst === fruits[0].toLowerCase() || answerSecond === fruits[fruits.length - 1].toLowerCase()) {
       alert ("Вы были близки к правильному ответу");
    } else {
       alert ("К сожалению, Вы ответили неверно. Попробуйте еще раз");
    }
    }