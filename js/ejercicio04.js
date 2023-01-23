window.onload = inicio
const lista = document.getElementById("ul")
const input = document.getElementById("input")
const botonAnadir = document.getElementById("botonAnadir")
const botonBorrarUltimo = document.getElementById("botonBorrarUltimo")
const botonBorrarPrimero = document.getElementById("botonBorrarPrimero")

function inicio(){
    botonAnadir.addEventListener("click",function(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        lista.appendChild(li);
        input.value=""
    })
    botonBorrarPrimero.addEventListener("click",function(){
        if(lista.getElementsByTagName("li").length!=0)
            lista.removeChild(lista.getElementsByTagName("li")[0])
    })
    botonBorrarUltimo.addEventListener("click",function(){
        if(lista.getElementsByTagName("li").length!=0)
            lista.removeChild(lista.getElementsByTagName("li")[lista.getElementsByTagName("li").length-1])
    })
}