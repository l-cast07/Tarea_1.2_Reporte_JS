import { validarEmail } from "./validaciones.js";
import { validarPassword } from "./validaciones.js";


console.log(validarEmail('RobaAncianas@gmail.com'));
console.log(validarPassword('12345678'));

if (validarEmail('RobaAncianas@gmail.com'),validarPassword('12345678')){
    console.log('Entrando...');
}
else{
    console.log('No entrando...');
}

