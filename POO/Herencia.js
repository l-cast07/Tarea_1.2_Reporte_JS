// Clase base
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        return (`${this.nombre} hace ${this.sonido}`);
    }
}

// Clase derivada (subclase)
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, 'guau'); // Llama al constructor de la clase base
        this.raza = raza;
    }

    mostrarRaza() {
        return (`${this.nombre} es un ${this.raza}`);
    }
}

// Creación de un objeto (instancia de la clase Perro)
const miPerro = new Perro('Max', 'Labrador');
console.log(miPerro.hacerSonido()); // Max hace guau
console.log(miPerro.mostrarRaza()); // Max es un Labrador