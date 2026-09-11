const productos = [
  { nombre: "camiseta", categoria: "ropa", precio: 500 },
  { nombre: "pantalón", categoria: "ropa", precio: 250 },
  { nombre: "zapatos", categoria: "calzado", precio: 1000 },
  { nombre: "sandalias", categoria: "calzado", precio: 600 }
];

function onlyRopa(arr){
    return arr.filter(productos=> productos.categoria == 'ropa');
}

console.log(onlyRopa(productos));

function agruparPorCategoria(arr) {
  return arr.reduce((grupo, producto) => {
    const categoria = producto.categoria;
    if (!grupo[categoria]) grupo[categoria] = [];
    grupo[categoria].push(producto);
    return grupo;
  }, {});
}

console.log(agruparPorCategoria(productos));

console.log('Menores de 1000');

function obtenerMenoresDe1000(arr) {
    return arr
        .filter(productos => productos.precio < 1000)
        .reduce((grupo, producto) => {
    const categoria = producto.categoria;
    if (!grupo[categoria]) grupo[categoria] = [];
    grupo[categoria].push(producto);
    return grupo;
  }, {});
}

console.log(obtenerMenoresDe1000(productos));

console.log('reto');
const estudiantes = [
  { nombre: "luis", carrera: "ISC", promedio: 9 },
  { nombre: "gera", carrera: "IAS", promedio: 5 },
  { nombre: "ansony", carrera: "ISC", promedio: 9 },
  { nombre: "diego", carrera: "ISC", promedio: 10 },
  { nombre: "sofia", carrera: "ISC", promedio: 8 },
  { nombre: "carlos", carrera: "IAS", promedio: 4 }
];

function getname(arr){
    return arr
    .map(estu => estu.nombre);
}

function na(arr){
    return arr
    .filter(estudiantes => estudiantes.promedio < 6);
}

function promedioGrupo(arr) {
    const suma = arr.reduce((acumulador, estu) => acumulador + estu.promedio, 0);
    return suma / arr.length;
}

function estcarrera(arr){
    return arr
    .reduce((grupo, producto) => {
        const categoria = producto.carrera;
        if (!grupo[categoria]) grupo[categoria] = [];
        grupo[categoria].push(producto);
        return grupo;
    }, {});
}

console.log(getname(estudiantes));
console.log('No aprobados');
console.log(na(estudiantes));
console.log('Promedio del grupo');
console.log(promedioGrupo(estudiantes));
console.log('Por Carrera');
console.log(estcarrera(estudiantes));