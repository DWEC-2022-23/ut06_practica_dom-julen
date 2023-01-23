window.onload = inicio;
const color = document.getElementById("color")
const titulo = document.getElementById("titulo")
const boton = document.getElementById("boton")

function inicio() {
    boton.addEventListener("click", function () {
        titulo.style.color = color.value
    })
}