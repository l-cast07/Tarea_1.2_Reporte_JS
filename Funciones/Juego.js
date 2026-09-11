// Importamos el módulo readline usando la API de promesas para usar async/await
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// Creamos la interfaz de lectura
const rl = readline.createInterface({ input, output });

// 1. Generador de números
function crearGeneradorNumeroAleatorio(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

// 2. Crear función de adivinanza
function crearJuegoAdivinarNumero(generadorNumero) {
    const numeroAleatorio = generadorNumero();
    let intentos = 0;

    return function(adivina) {
        intentos += 1;

        if (adivina < numeroAleatorio) {
            return `El número es mayor. Intentos: ${intentos}`;
        } else if (adivina > numeroAleatorio) {
            return `El número es menor. Intentos: ${intentos}`;
        } else {
            return `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        }
    };
}

// 3. Inicialización del juego
async function iniciarJuego() {
    // Leemos y convertimos los valores del rango
    const respuestaMin = await rl.question("Ingrese el valor mínimo del rango: ");
    const rangoMin = parseInt(respuestaMin);

    const respuestaMax = await rl.question("Ingrese el valor máximo del rango: ");
    const rangoMax = parseInt(respuestaMax);

    const generadorNumero = crearGeneradorNumeroAleatorio(rangoMin, rangoMax);
    let juego = crearJuegoAdivinarNumero(generadorNumero);
    let resultado;
    // Bucle asíncrono para las adivinanzas
    do {
        const respuestaAdivina = await rl.question("Adivina el número: ");
        const adivina = parseInt(respuestaAdivina);

        resultado = juego(adivina);
        console.log(resultado);

    } while (!resultado.includes("¡Felicidades!"));

    const jugarDeNuevo = await rl.question("¿Quieres jugar de nuevo? (s/n): ");

    if (jugarDeNuevo.toLowerCase() === 's') {
        await iniciarJuego();
    } else {
        console.log("¡Gracias por jugar!");
        rl.close(); // Es vital cerrar la interfaz para que el script de Node.js termine
    }
}
// Inicia el juego por primera vez
iniciarJuego();