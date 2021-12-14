document.addEventListener('DOMContentLoaded', () => {
  cards()
})
// <------------------------ scope Global ------------------------>
let productos = [];
let carrito;
// <------------------------ Crear productos ------------------------>
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

productos.push(new Product(1,"Mouse logitech g203",6000,10,"Mouse de la marca Logitech con el mejor calidad precio.<br>Esta hecho para ambidiestro.","https://dcompu.com/wp-content/uploads/2020/11/Mouse-Gamer-Logitech-G203-Optico-Negro.jpg",0,"Mouse"));
productos.push(new Product(2,"Teclado redragon kumara k552", 6500,0,"Teclado con diferenstes tipos de twitch de la marca Outemu blue<br>Es un teclado 80%","https://www.precio-calidad.com.ar/wp-content/uploads/2019/03/KUMARA-RGB-3.jpg",0,"Teclado"));
productos.push(new Product(4,"redragon impact m908 ",3000,4,"Mouse con muchos votones para multi tarea","https://redragonla.com/wp-content/uploads/2019/04/M908-6.png",0,"Mouse"))
productos.push(new Product(5,"Razer deathadder v2",6400,0,"Uno de los mouse calidad precio de la vende marca de Razer","https://bestinformatica.com.ar/wp-content/uploads/2020/09/DEATHADDER-0.jpg",0,"Mouse"))
productos.push(new Product(6,"Auriculares logitech g332",5000,2,"Mejores auriculares calidad precio.<br>Son perfectos para tus partidas de csgo","https://resource.logitechg.com/content/dam/gaming/en/products/g332/g332-hero.png",0,"Auris"))

// <------------------------ DOM ------------------------>

const cardHtml = document.getElementById("producto")

// <------------------------ Hacer Cards ------------------------>
const cards = () => {

  cardHtml.innerHTML = ``
  
  for (let i of productos) {
    let card = document.createElement("div")
    card.className = "col-lg-4 col-md-6 mb-4" 
    card.innerHTML = `
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="${i.img}" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${i.nombre}</a>
            </h4>
            <h5>$${i.precio}</h5>
            <p class="card-text">${i.descripcion}</p>
          </div>
          <div style="display: none;">${i.cantidad}</div>
          <div class="card-footer">
            <button id="${i.id}">Agregar al carrito</button>
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>`;
    cardHtml.appendChild(card)

    let button = document.getElementById(i.id)
    button.addEventListener("click", () => agregarAlCarrito(i))
    
  };
}
// <------------------------ Filtros para el liyo ------------------------>
const filtrar = (catg) => {
  let filtrados = productos.filter (Element => Element.categoria == catg);

  cardHtml.innerHTML = ``

  for (let i of filtrados) {
    let card = document.createElement("div")
    card.className = "col-lg-4 col-md-6 mb-4" 
    card.innerHTML = `
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="${i.img}" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${i.nombre}</a>
            </h4>
            <h5>$${i.precio}</h5>
            <p class="card-text">${i.descripcion}</p>
          </div>
          <div style="display: none;">${i.cantidad}</div>
          <div class="card-footer">
            <button id="${i.id}">Agregar al carrito</button>
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>`;
    cardHtml.appendChild(card)

    let button = document.getElementById(i.id)
    button.addEventListener("click", () => agregarAlCarrito(i))
  };
}


