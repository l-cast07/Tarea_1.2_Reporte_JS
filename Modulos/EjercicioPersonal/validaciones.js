export const validarEmail = (email) => {
    if(email.includes('@','.')){
        return true;
    }
    else{
        return false;
    }
}

export const validarPassword = (password) => {
    if (password.length >= 8){
        console.log('Si tienes los 8 caracteres');
      return true;  
    }
    else{
        console.log('No cumples con la longitud');
        return false;
    }
}
