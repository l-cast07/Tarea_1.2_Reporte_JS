function crearMiCarrito() {

  let productos_del_carrito = []; 

  return {
    agregarItem: function(name, price) {
      var nuevoItem = { nombre: name, precio: price };
      productos_del_carrito.push(nuevoItem);
      console.log("Se agrego: " + name + " que cuesta $" + price);
    },

    verNombres: () => {
      let nombres = productos_del_carrito.map(function(item) {
        return item.nombre;
      });
      console.log("Tus cosas son: " + nombres.join(" y "));
    },

    borrarItem: function(nombreParaBorrar) {
      productos_del_carrito = productos_del_carrito.filter((item) => item.nombre !== nombreParaBorrar);
      console.log("Se fue " + nombreParaBorrar + " con dios");
    },

    pagarTotal: function(funcionDeDescuento) {
      let total = 0;
      
      productos_del_carrito.forEach(function(cosita) {
        total = total + cosita.precio; 
      });

      console.log("El total es: $" + total);

      if (funcionDeDescuento) {
        var totalConRebaja = funcionDeDescuento(total);
        return totalConRebaja;
      } else {
        return total;
      }
    }
  };
}

let carritoDeJuan = crearMiCarrito();

carritoDeJuan.agregarItem("Gansito", 25);
carritoDeJuan.agregarItem("Coca Cola", 35);
carritoDeJuan.agregarItem("Sabritas", 20);

carritoDeJuan.verNombres();

carritoDeJuan.borrarItem("Sabritas");
carritoDeJuan.verNombres();

function descuentoDeEstudiante(dinero) {
  return dinero - 15;
}

const descuentoVIP = (dinero) => {
  return dinero * 0.5;
}

let aPagar = carritoDeJuan.pagarTotal(descuentoDeEstudiante);
console.log("Ya con descuento pagas: $" + aPagar);

console.log("Intentando robar el carrito: ", carritoDeJuan.productos_del_carrito);