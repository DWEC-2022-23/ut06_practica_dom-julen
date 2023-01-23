window.onload = inicio
const mañana = document.getElementById("mañana")
const tarde = document.getElementById("tarde")
const gradoSuperiorM = document.getElementById("gradoSuperiorM")
const gradoSuperiorT = document.getElementById("gradoSuperiorT")
const gradoMedioM = document.getElementById("gradoMedioM")
const gradoMedioT = document.getElementById("gradoMedioT")
const resultado = document.getElementById("resultado")


function inicio(){
    gradoSuperiorM.addEventListener("click",function(){
        resultado.innerHTML = texto(gradoSuperiorM,mañana) 
    }) 
    gradoSuperiorT.addEventListener("click",function(){
        resultado.innerHTML = texto(gradoSuperiorT,tarde)         
    })
    gradoMedioM.addEventListener("click",function(){
        resultado.innerHTML = texto(gradoMedioM,mañana)         
    })
    gradoMedioT.addEventListener("click",function(){
        resultado.innerHTML = texto(gradoMedioT,tarde)         
    })

    function texto(grado,turno){
        let lista = grado.nextSibling.nextSibling.getElementsByTagName("li")
        let auxLista =""
        for (let i=0; i<lista.length-1 ;i++){
            auxLista += lista[i].innerHTML+", "
        }
        auxLista+=lista[lista.length-1].innerHTML

        return "Has elegido "+grado.innerHTML.replaceAll("&nbsp;", '').trim()+" que se imparte en turno de "+turno.id+
        "<br>Los nº de grupos que se imparten son "+lista.length+": "+auxLista
    }
}