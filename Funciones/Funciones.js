// Suma
function sumar(a, b) {
    return a + b;
}

// Potencia
function potencia(b, e) {
    return Math.pow(b, e);
}

// Mayor de 2
function mayor(n1, n2) {
    if (n1 > n2) return n1;
    else return n2;
}

const sumarFlecha = (a, b) => a + b;

const potenciaFlecha = (b, e) => Math.pow(b, e);

const mayorFlecha = (n1, n2) => (n1 > n2) ? n1 : n2;

// Mayor de 3
function mayor3(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(`El mayor es el: ${n1}`);
    } 
    else if (n2 > n1 && n2 > n3) {
        console.log(`El mayor es el: ${n2}`);
    } 
    else {
        console.log(`El mayor es el: ${n3}`);
    }
}

// Mayor de 3
const mayor3flecha = (n1, n2, n3) => (n1 > n2 && n1 > n3) ? n1 : (n2 > n1 && n2 > n3) ? n2 : n3;

// Dividir
function dividir(a, b) {
    if (b === 0) {
        return 'Error';
    } else {
        return a / b;
    }
}

// Dividir (Flecha)
const dividirflecha = (a, b) => b === 0 ? 'Error' : a / b;

// Personal mult
    function mult (n1, n2){
        return n1 * n2;
    }

    multflecha = (n1,n2) => n1*n2;

console.log(mult(2,1));
console.log(multflecha(2,1));

// Personal Pass
    function pass (pass){
        if(pass == 123){
            return 'Hola'
        }
        else{
            return "Holan't"
        }
    }

    passFlecha = (pass) => (pass == 123) ? 'Hola' : "Holan't";

    console.log(pass(123));
    console.log(passFlecha(452));


console.log(dividirflecha(0, 0));        
console.log(mayor3flecha(1, 2, 3));      
console.log(sumar(3, 2));                
console.log(potencia(3, 2));             
console.log(mayor(3, 2));                
console.log(sumarFlecha(3, 2));          
console.log(potenciaFlecha(3, 2));       
console.log(mayorFlecha(3, 2));          