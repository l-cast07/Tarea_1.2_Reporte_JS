// Definar fucion que realiza la suma

function sumar(a, b, callback){
    const resultado = a + b;
    callback(resultado);
}

function mostrarResultado(resultado){
    console.log("La suma es: ", resultado);
}

//Llamamos a la funcion sumar
sumar(5,10, mostrarResultado);

//Ejemplo2
function obtenerDatos(callback){
    setTimeout(() => {
        const datos = {nombre: 'Juan', edad: 30};
        callback(datos);
    },2000)
}

function mostrarDatos (datos){
    console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
}

obtenerDatos(mostrarDatos);