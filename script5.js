function getSeason(){
    let month = Number(prompt('Введи номер месяца, а я скажу к какому времени года он относится'));

    if (month >= 3 && month <= 5){
        alert ('весна');
    }
    else if (month >= 6 && month <= 8){
        alert ('лето');
    }
    else if (month >= 9 && month <= 11){
        alert ('осень');
    }
    else if (month == 12|| month ==1 || month == 2){
        alert ('зима');
    }
    else {
        alert ('Неизвестное значение')
    }

}