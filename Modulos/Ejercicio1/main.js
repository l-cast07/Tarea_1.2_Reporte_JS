import {saludo, despedida} from './Archivo1.js'; //Importacion nombrada
import mensaje from './Archivo2.js';              // Importacion por defecto
import {suma, resta, multiplicacion, division, pow, may2} from './math.js';

saludo(); //Importacion nombrada
despedida(); //Importacion nombrada
console.log(mensaje); // Importacion por defecto
console.log(suma(2,3));
console.log(resta(5,2));
console.log(pow(2,7));
console.log(may2(4,5));