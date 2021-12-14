//Agregar al carrrito
function agregarAlCarrito(item){  

  let aux = carrito.find(Element => Element.id == item.id)
  
  const verificarRepeticion = element => element.id === item.id;  

  if((item.stock <= 0) || (aux != undefined && aux.cantidad >= item.stock)){

    $("#textPop").html(`Mil dispulpa no tenes stock de ${JSON.stringify(item.nombre)}, porfavor intente mas tarde.`)
    $("#pop").show(1000)
    $("#pop").fadeOut(3000)

  }else if(carrito.some(verificarRepeticion)){

    carrito.find(Element => Element.id === item.id).cantidad++;
    carritoStorage()

  }else{

    carrito.push(item)
    carrito.find(Element => Element.id === item.id).cantidad++;
    carritoStorage()

  }
  
}



/*TODO - Hacer que producto tengo su storage 
Y de eso ir con el verificador ver que producto se pasa al carrito y restarle el stock de productos
Y cuando carrito este vacio restablecer los productos haciendo que el storege y las class esten en un misma funcion 
Y lo mismo apra el boton de sumar y restar
 */