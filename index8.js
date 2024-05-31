// задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.age.sort(function(a, b)))
    return a - b;

//задание 2
function isPositive(num){
    return num > 0
}

function isMale (prop){
    return prop.gender === male
}

function filter(array, callback){
    const resultArray = []
    array.forEach(element => {
        if(callback(element)){
        resultArray.push(element)
        }
    });

    return resultArray

}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 