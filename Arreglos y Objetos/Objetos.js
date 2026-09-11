const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

console.log(persona.nombre);
console.log(persona['edad']);

const libro = {
    titulo: 'El principito',
    autor: 'Antoino de Saint-Exupery',
    year: 1943
};

for (let propiedad in libro) {
    console.log(`${propiedad}: ${libro[propiedad]}`);
}

function contarPropiedades(obj){
    return Object.keys(obj).length;
}

const coche = {
    marca: 'Toyota', modelo: 'Corolla', year: 2020, freno: 'Yes'
};

console.log(contarPropiedades(coche));

if (contarPropiedades(coche) >= 3){
    console.log('si las tiene');
}
else {
    console.log('no');
}