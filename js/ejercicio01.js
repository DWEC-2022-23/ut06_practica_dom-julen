window.onload = inicio;
const color = document.getElementsByTagName("input")[0]
const titulo = document.getElementsByTagName("h1")[0]
const boton = document.getElementById("boton")

function inicio() {
    boton.addEventListener("click", function () {
        titulo.style.color = color.value
    })
}