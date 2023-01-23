window.onload = inicio
const div = document.getElementById("div")
const boton = document.getElementById("boton")
var aux = true

function inicio(){
    boton.addEventListener("click", function(){
        if(aux){
            div.style.backgroundColor="black"
            div.style.color="white"
            aux=!aux
        }
        else{
            div.style.backgroundColor=""
            div.style.color=""
            aux=!aux
        }
    })
}