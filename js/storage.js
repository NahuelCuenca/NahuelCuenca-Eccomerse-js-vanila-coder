// <------------------------ VALIDAR EL CHANGO PAPA PA QUE NO FALTE ------------------------>
let validarCarrito = localStorage.getItem("carrito");

if (validarCarrito == null){
    carrito = [];
 }else{
   carrito = JSON.parse(validarCarrito)
   console.log( carrito)
}

// <------------------------ Funciones de storage ------------------------>

const carritoStorage = () => {
   localStorage.setItem("carrito", JSON.stringify(carrito))
}