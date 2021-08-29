// <------------------------ Scope global ------------------------>
let validarCarrito = localStorage.carrito;
let validarProductos = localStorage.productos;
let carrito = null;
const serializadoCarrito = JSON.stringify(carrito);
// <------------------------ VALIDAR EL CHANGO PAPA PA QUE NO FALTE ------------------------>
if (validarCarrito == null){
    carrito = [];
 }else{
   carrito = JSON.parse(validarCarrito)
   console.log( carrito)
}