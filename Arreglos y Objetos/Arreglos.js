const frutas = ['manzana', 'banana', 'naranja', 'uva'];

console.log(frutas[0]); //manzana
console.log(frutas.length);

frutas.push('pera');

console.log(frutas[4]);
console.log(frutas.length);

frutas.pop();

console.log(frutas[3]);

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

const numeros = [1,2,3,4,5];

const dobles = numeros.map(num => num * 2);

const menos1 = numeros.map(num => num - 1);

const mayores = numeros.filter(num => num > 2);

console.log(mayores);
console.log(dobles);
console.log(menos1);

// lista de precios
const precios = [100, 200, 300, 400, 500, 1000, 4280, 5245, 6543];

const desc = precios.map(de => de * .85);
const less = desc.filter(le => le < 500);

console.log(precios);
console.log(desc);
console.log(less);

// metodo reduce
//se uso la lista de numeros
const suma = numeros.reduce((total, num) =>
    total + num, 0
);

console.log(suma);
function encontrarMayor (arr){
    return arr.reduce(
        (max, num) => (num > max ? num : max),
        arr[0]
    );
}

console.log (encontrarMayor([10,5,8,20,15]));

console.log(suma);
function encontrarMenor (arr){
    return arr.reduce(
        (max, num) => (num < max ? num : max),
        arr[0]
    );
}

console.log (encontrarMenor([10,5,8,20,15]));

// suma de los numeros pares de un arreglo

arreglo = [10, 5, 8, 20, 15, 14];

const pares = arreglo.filter(num => num % 2 == 0);

const sumaPar = pares.reduce((total, num) => 
    total + num, 
    0
);

console.log(sumaPar);