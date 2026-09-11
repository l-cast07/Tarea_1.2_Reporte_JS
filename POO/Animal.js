// Definición de la clase base
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        return `${this.nombre} hace ${this.sonido}`;
    }
}

// Creación de objetos (instancias de la clase Animal)
const perro = new Animal('Perro', 'guau');
const gato = new Animal('Gera', 'miau');
console.log("Salida: " + perro.hacerSonido());
console.log("Salida: " + gato.hacerSonido());

// Clase derivada (subclase) para Perro
class PerroSub extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'guau');
        this.raza = raza;
    }

    mostrarRaza() {
        return `${this.nombre} es un ${this.raza}`;
    }
}

// Clase derivada (subclase) para Gato
class GatoSub extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'miau');
        this.raza = raza;
    }

    mostrarRaza() {
        return `${this.nombre} es un ${this.raza}`;
    }
}

class otro extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'AAAA');
        this.raza = raza;
    }

    mostrarRaza() {
        return `${this.nombre} es un ${this.raza}`;
    }
}

// Creación de objetos con las clases correctas
const miPerro = new PerroSub('Max', 'Labrador');
const miGato = new GatoSub('Luna', 'Siamés');
console.log(miPerro.hacerSonido());
console.log(miPerro.mostrarRaza());
console.log(miGato.hacerSonido());
console.log(miGato.mostrarRaza());

// Arreglo con instancias válidas
const animales = [
    new PerroSub('Max', 'Labrador'), 
    new GatoSub('Luna', 'Siamés'),
    new otro('Fack','Infiel')
];

let salida = '';
animales.forEach(animal => {
    salida += animal.hacerSonido() + " ";
});

console.log(salida);