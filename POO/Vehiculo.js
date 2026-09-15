class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log("La marca es " + this.marca + " y el modelo es " + this.modelo);
    }

    encender() {
        console.log("El vehículo está encendido.");
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    mostrarPuertas() {
        console.log("Este coche tiene " + this.puertas + " puertas.");
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    mostrarCilindrada() {
        console.log("La moto tiene una cilindrada de " + this.cilindrada);
    }
}

const miVehiculo = new Vehiculo("Nissan", "Tsuru");
miVehiculo.mostrarInfo();
miVehiculo.encender();

console.log("-------------------");

const miCoche = new Coche("Chevrolet", "Aveo", 4);
miCoche.mostrarInfo();
miCoche.mostrarPuertas();
miCoche.encender();

console.log("-------------------");

const miMoto = new Moto("Italika", "DM200", "200cc");
miMoto.mostrarInfo();
miMoto.mostrarCilindrada();
miMoto.encender();