function crearContador(){
    let contador = 0;

    return function(){
        contador ++;
        return contador;
    }
}

const contador1 = crearContador();
const contador2 = crearContador();
const contador3 = crearContador();

console.log(contador1());
console.log(contador1());
console.log(contador2());
console.log(contador2());

console.log(contador3());
console.log(contador3());
console.log(contador3());

//Ejercicio 2

function crearSaludo(saludo) {
    return function(nombre) {
        return `${saludo} ${nombre}`;
    };
}

const saludarEnEspanol = crearSaludo('Hola');
const saludarEnIngles = crearSaludo('Hello');
const saludarEnAleman = crearSaludo('Hallo');
const saludarEnRuso = crearSaludo('привет');

console.log(saludarEnEspanol('Juan')); // Hola Juan
console.log(saludarEnIngles('Jhon'));  // Hello Jhon
console.log(saludarEnAleman('Jhon'));
console.log(saludarEnRuso('Jhon'));