document.addEventListener('DOMContentLoaded', () => {
  hacerCarrito()
})
// <------------------------ Hacer las cards del carrito ------------------------>
const hacerCarrito = () =>{

let precioFinal = 0;
let cantidadFinal = 0;

  if(carrito.length === 0){
    let carritoHtml = document.getElementById("princ")
    carritoHtml.innerHTML = `El carrito esta Vacio`
  }else{
  carrito.forEach(element => {
    let cardCarrito =`
      <div class="col-sm-12 col-md-6 col-lg-3 ">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${element.img}" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">${element.nombre}</a>
              </h4>
              <h5>$${element.precio}</h5>
              <p class="card-text">Cantidad ${element.descripcion}</p>
            </div>
            <div class="card-footer"><small class="text-muted">Cantidad ${element.cantidad}</small>
            <button class="btn btn-info btn-sm"  id="+${element.id}">
                +
            </button>
            <button class="btn btn-danger btn-sm" id="-${element.id}">
                -
            </button>
            </div>
          </div>
        </div>`   

      $("#cardCarrito").append(cardCarrito)
     
      document.getElementById(`+${element.id}`).addEventListener("click", () => sumarCantidad(element))
      document.getElementById(`-${element.id}`).addEventListener("click", () => restarCantidad())

      cantidadFinal += element.cantidad;    
      precioFinal += element.precio * element.cantidad;
})};

$("#cantidadFinal").html(cantidadFinal)
$("#precioFinal").html(precioFinal)
}
// <------------------------ Boton suma de cantidad ------------------------>
function sumarCantidad(item) {

  console.log(item)

  let aux = carrito.find(Element => Element.id == item.id)

    if (item.cantidad < aux.stock ){
      carrito.find(itemCarrito => itemCarrito.id === item.id).cantidad++;
      document.getElementById("cardCarrito").innerHTML = ``
      hacerCarrito()
      carritoStorage()
    }else{
    $("#textPop").html(`Mil dispulpa no tenes stock de ${JSON.stringify(item.nombre)}, porfavor intente mas tarde.`)
    $("#pop").show(1000)
    $("#pop").fadeOut(3000)
    }
}

// <------------------------ Boton resta de cantioda ------------------------>
function restarCantidad(item) {

  const verificar = element => element.id == item;
    
  if(carrito.some(verificar)){
     const restarItem = carrito.findIndex((itemCarrito)=>{
        return itemCarrito.id === item;
      })
      if(carrito[restarItem].cantidad === 1){
        let i = carrito.splice(restarItem, 1)
        productos.find(itemProducto => itemProducto.id === item).stock++;      
          localStorage.carrito = JSON.stringify(carrito)
          localStorage.productos = JSON.stringify(productos)
          hacerCarrito(carrito)
      }
      else{ 
      carrito[restarItem].cantidad--;
      carrito.find(itemCarrito => itemCarrito.id === item).stock++;
      productos.find(itemProducto => itemProducto.id === item).stock++;
        localStorage.carrito = JSON.stringify(carrito)
        localStorage.productos = JSON.stringify(productos)
        hacerCarrito(carrito)  
    }}
}

// <------------------------ Forma antigua de sumar ------------------------>
// function sumarCantidad(item) {
//   const verificar = Element => Element.id == item;  
//   if(carrito.some(verificar)){
//      const sumarItem = carrito.findIndex((itemCarrito)=>{
//         return itemCarrito.id === item;
//       })
//       carrito[sumarItem].cantidad ++;
//       localStorage.carrito = JSON.stringify(carrito)
//       hacerCarrito(carrito)
//     }
// }
