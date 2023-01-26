window.onload = inicio
const div = document.getElementById("div")
const boton = document.getElementById("boton")
var aux = true

function inicio(){
    boton.addEventListener("click", function(){
        if(aux){
            div.style.backgroundColor="black"
            div.style.color="white"
            boton.innerHTML="Fondo claro"
            aux=!aux
        }
        else{
            div.style.backgroundColor=""
            div.style.color=""
            boton.innerHTML="Fondo oscuro"
            aux=!aux
        }
    })
}