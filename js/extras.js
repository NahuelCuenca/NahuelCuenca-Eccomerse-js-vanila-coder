document.addEventListener('DOMContentLoaded', () => {
    name();
});
// <------------------------ Nombre y validacion ------------------------>
const name = () => {
let validarNombre = localStorage.na;
let na = `` ;
if (validarNombre == undefined){
    na = prompt("Introduce tu nombre completo");
    localStorage.na = na;
}else{
    na = validarNombre
}
// <------------------------ Efecto de texto ------------------------>
let domNombre = document.getElementById("mostrarNombre").innerHTML = `Bienvenido ${na}`;
function textEffect() {
    $("#mostrarNombre").fadeOut(3000, () => {         
        $("#mostrarNombre").fadeIn(3000)
        return
    })
 } setInterval(textEffect, 0);
}
//FORMA MAS CORTA
// function textEffect() {    $("#mostrarNombre").fadeOut(3000).fadeIn(3000)
// }
