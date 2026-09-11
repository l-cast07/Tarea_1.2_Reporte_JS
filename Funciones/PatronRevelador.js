const CentralDeSaludos = (function() {
    // --- ZONA PRIVADA (Protegida por el closure) ---
    // Nadie desde afuera puede modificar este contador directamente
    let contadorDeSaludos = 0;

    // Función de uso interno únicamente
    function registrarSaludo() {
        contadorDeSaludos++;
        console.log(`Log interno: Se han emitido ${contadorDeSaludos} saludos en total.`);
    }

    // --- ZONA PÚBLICA (Lo que se revela) ---
    // Retornamos un objeto con las herramientas que sí queremos exponer
    return {
        enEspanol: function(nombre) {
            registrarSaludo();
            return `Hola, ${nombre}!`;
        },
        enIngles: function(nombre) {
            registrarSaludo();
            return `Hello, ${nombre}!`;
        },
        enAleman: function(nombre) {
            registrarSaludo();
            return `Hallo, ${nombre}!`;
        }
    };
})(); // La función se ejecuta a sí misma inmediatamente (IIFE)

// Uso del módulo:
console.log(CentralDeSaludos.enEspanol('Juan'));
console.log(CentralDeSaludos.enIngles('Maria'));
console.log(CentralDeSaludos.enAleman('Luis'));

// Intento de hackeo al sistema fallido:
console.log(CentralDeSaludos.contadorDeSaludos); // undefined (¡Está protegido!)