function ejecutarOperacion(a, b, operacion){
    return operacion (a,b);
}

const sumar = (a,b) => a + b;
const multiplicar = (a,b) => a * b;
const resta = (a,b) => a - b;
const div = (a,b) => a/b;
const duplicar = (x) => x *2;
const pow = (x) => x**3;
const porcent20 = (x) => x*.8;


function aplicarOperacionAArray(arr, operacion){
    return arr.map(operacion);
}

const numeros = [1,2,3,4];


console.log (aplicarOperacionAArray(numeros, duplicar));
console.log (aplicarOperacionAArray(numeros, pow));
console.log (aplicarOperacionAArray(numeros, porcent20));

console.log(ejecutarOperacion(1, 2, sumar));
console.log(ejecutarOperacion(1, 2, multiplicar));
console.log(ejecutarOperacion(1, 2, resta));
console.log(ejecutarOperacion(1, 2, div));

// Esta es la función de orden superior. Recibe un número y devuelve una FUNCIÓN.
const esMultiploDe = (divisor) => {
    return (numero) => numero % divisor === 0;
};

const num = [1,2,3,4,5,6,7,8,9,10];

// Generamos funciones de condición dinámicamente
const esPar = esMultiploDe(2);
const esDivisiblePor3 = esMultiploDe(3);
const mul4 = esMultiploDe(4);

// Usamos las funciones generadas dentro de filter
const pares = num.filter(esPar);            // [2, 4, 6]
const multiplos3 = num.filter(esDivisiblePor3); // [3, 6]
const multi = num.filter(mul4);

console.log(pares);
console.log(multiplos3);
console.log(multi);
