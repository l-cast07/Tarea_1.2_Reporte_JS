class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo(){
        return `Este coche es marca ${this.marca} es un ${this.modelo}`;
    }
}

class Coche extends Vehiculo{
    constructor(marca, puertas) {
        super(marca, 'Algun Modelo');
        this.puertas = puertas;
    }

    mostrarPuertas(){
        return `El carro ${this.marca} tiene ${this.puertas} puertas`;
    }
}

class Moto extends Vehiculo{
    constructor(marca, llantas) {
        super(marca, '2');
        this.llantllantas =llantas;
    }

    mostrarLLantas(){
        return `La moto ${this.marca} tiene ${this.llantllantas} llantas`;
    }
}

const Carro = new Coche('El del guero','4');
console.log(Carro.mostrarPuertas());
