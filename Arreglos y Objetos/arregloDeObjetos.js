const users = [
    {name: 'Ana', age: 10},
    {name: 'Luis', age: 26},
    {name: 'Marcos', age: 27}
];

function obtenerNombres(arr){
    return arr.map(users => users.name);
}

console.log(obtenerNombres(users));

function getAge(arr){
    return arr.map(users => users.age);
}

console.log(getAge(users));

console.log("mayores a 25");


function obtenerMayoresDe25(arr) {
    return arr
        .filter(user => user.age > 25)
        .map(user => user.name);
}

console.log("mayores a 25");
console.log(obtenerMayoresDe25(users));