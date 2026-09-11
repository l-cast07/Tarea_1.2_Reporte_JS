const moduloContador = (function(){
    let contador = 0;
    return {
        incrementar: function(){
            contador ++;
            return contador;
        },

        obtenerContador: function(){
            return contador;
        },

        decrementar: function(){
            contador --;
            return contador;
        }
    };
})();

console.log(moduloContador.incrementar());
console.log(moduloContador.incrementar());
console.log(moduloContador.obtenerContador());
console.log(moduloContador.decrementar());