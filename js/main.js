document.addEventListener('DOMContentLoaded', () => {
  crearProductos()
})
// <------------------------ scope Global ------------------------>
let productos = [];
const serializado = JSON.stringify(productos);
// <------------------------ Crear productos ------------------------>

const crearProductos = () => {
if(validarProductos == null){
  class Product{
    constructor (id,nombre,precio,stock,descripcion,img,cantidad,categoria){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock,
      this.descripcion = descripcion;
      this.img = img;
      this.cantidad = cantidad;
      this.categoria = categoria;
  }};
productos.push(new Product(1,"Mouse logitech g203",6000,10,"Mouse de la marca Logitech con el mejor calidad precio.<br>Esta hecho para ambidiestro.","https://dcompu.com/wp-content/uploads/2020/11/Mouse-Gamer-Logitech-G203-Optico-Negro.jpg",1,"Mouse"));
productos.push(new Product(2,"Teclado redragon kumara k552", 6500,0,"Teclado con diferenstes tipos de twitch de la marca Outemu blue<br>Es un teclado 80%","https://www.precio-calidad.com.ar/wp-content/uploads/2019/03/KUMARA-RGB-3.jpg",1,"Teclado"));
productos.push(new Product(3,"Auriculares hyperx cloud stinger", 7000,30,"Auriculares con bincha regulable.<br>Tiene orejeras espumadas.","data:image/jpeg;base64,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",1,"Auris"));
productos.push(new Product(4,"redragon impact m908 ",3000,4,"Mouse con muchos votones para multi tarea","https://redragonla.com/wp-content/uploads/2019/04/M908-6.png",1,"Mouse"))
productos.push(new Product(5,"Razer deathadder v2",6400,0,"Uno de los mouse calidad precio de la vende marca de Razer","https://bestinformatica.com.ar/wp-content/uploads/2020/09/DEATHADDER-0.jpg",1,"Mouse"))
productos.push(new Product(6,"Auriculares logitech g332",5000,2,"Mejores auriculares calidad precio.<br>Son perfectos para tus partidas de csgo","https://resource.logitechg.com/content/dam/gaming/en/products/g332/g332-hero.png",1,"Auris"))

  localStorage.productos = JSON.stringify(productos)
  cards()
}else{
  productos = JSON.parse(validarProductos)
  localStorage.productos = JSON.stringify(productos)
  cards()
}

}
// <------------------------ Hacer Cards ------------------------>
const cards = () => {
let card = ``;
  for (let i=0; i < productos.length; i++) {
    card += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="${productos[i].img}" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${productos[i].nombre}</a>
            </h4>
            <h5>$${productos[i].precio}</h5>
            <p class="card-text">${productos[i].descripcion}</p>
          </div>
          <div style="display: none;">${productos[i].cantidad}</div>
          <div class="card-footer">
            <button onclick='agregarAlCarrito(${JSON.stringify(productos[i])})'>Agregar al carrito</button>
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>`;
  };
$("#producto").html(card);
}
// <------------------------ Filtros para el liyo ------------------------>
const filtrar = (catg) => {
  let filtrados = productos.filter (Element => Element.categoria == catg);
  let cardFiltradas = ``;
    for (let i=0; i < filtrados.length; i++){
      cardFiltradas += `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${filtrados[i].img}" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">${filtrados[i].nombre}</a>
          </h4>
          <h5>$${filtrados[i].precio}</h5>
          <p class="card-text">${filtrados[i].descripcion}</p>
        </div>
        <div class="card-footer">
          <button onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
          <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>`;
    }
    $("#producto").html(cardFiltradas)
}


