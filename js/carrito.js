//Agregar al carrrito
function agregarAlCarrito(item){  
  const verificarRepeticion = element => element.id == item.id;  
  if (item.stock <= 0) {
    $("#textPop").html(`Mil dispulpa no tenes stock de ${JSON.stringify(item.nombre)}, porfavor intente mas tarde.`)
    $("#pop").show(1000)
    $("#pop").fadeOut(3000)
  }
  else if (carrito.some(verificarRepeticion)) {
      carrito.find(itemCarrito => itemCarrito.id === item.id).cantidad++;
      carrito.find(itemCarrito => itemCarrito.id === item.id).stock--;
      productos.find(itemProducto => itemProducto.id === item.id).stock--;
        localStorage.carrito = JSON.stringify(carrito)
        localStorage.productos = JSON.stringify(productos)
        cards()
  }
   else{
      carrito.push(item);
      carrito.find(itemCarrito => itemCarrito.id === item.id).stock--;
      productos.find(itemProducto => itemProducto.id === item.id).stock--;
      localStorage.carrito = JSON.stringify(carrito)
      localStorage.productos = JSON.stringify(productos)
      cards()
      }
    
}



/*TODO - Hacer que producto tengo su storage 
Y de eso ir con el verificador ver que producto se pasa al carrito y restarle el stock de productos
Y cuando carrito este vacio restablecer los productos haciendo que el storege y las class esten en un misma funcion 
Y lo mismo apra el boton de sumar y restar
 */