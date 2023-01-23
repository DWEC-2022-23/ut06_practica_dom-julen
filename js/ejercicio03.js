window.onload = inicio
const lista = document.getElementById("lista")
const input = document.getElementById("input")
const boton = document.getElementById("boton")


function inicio(){
    boton.addEventListener("click",function(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        lista.appendChild(li);
        input.value=""
    })
}