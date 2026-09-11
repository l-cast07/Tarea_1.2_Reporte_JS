const miPromesa = new Promise((resolve, project) => {
    const exito = true;

    if (exito){
        resolve("Operacion exitosa");
    } else{
        reject("Ocurrio un error.");
    }
});

miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });