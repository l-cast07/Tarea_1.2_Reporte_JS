// main.js
import coloresApp, { tipografia } from './theme.js';
import { formatearMoneda, generarIdUnico } from './utils.js';

console.log("Color primario de la app:", coloresApp.primario);
console.log("Tamaño del título:", tipografia.titulo);
console.log("Precio del producto:", formatearMoneda(499.50));
console.log("ID del nuevo usuario:", generarIdUnico());