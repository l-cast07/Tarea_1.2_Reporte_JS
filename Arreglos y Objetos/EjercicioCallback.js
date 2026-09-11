//Ejemplo2
function obtenerDatos(callback){
    setTimeout(() => {
        const datos = [1,2,3,4,5,6,7,8,9,0];
        
        callback(datos.filter(datos => datos < 6));
    },2000)
}

function mostrarDatos (datos){
    console.log(datos);
}

obtenerDatos(mostrarDatos);