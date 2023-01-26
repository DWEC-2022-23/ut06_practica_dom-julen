let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";
const botonAnadir = document.getElementById("botonAnadir")


window.addEventListener("load", iniciar);
function iniciar() {
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }

  listUl.addEventListener('click', crearbotones);
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista);
  addItemButton.addEventListener('click', AñadirElemento);
}

function attachListItemButtons(li) {
  //Boton subir y cosas del mismo
  let subir = document.createElement('button');
  subir.className = 'subir';
  subir.textContent = 'subir';
  li.appendChild(subir);

  //Boton bajar y cosas del mismo
  let bajar = document.createElement('button');
  bajar.className = 'bajar';
  bajar.textContent = 'bajar';
  li.appendChild(bajar);

  //Boton borrar y cosas del mismo
  let borrar = document.createElement('button');
  borrar.className = 'borrar';
  borrar.textContent = 'borrar';
  li.appendChild(borrar);
}

function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  thisLi = event.target.parentElement
  switch (event.target.innerHTML) {
    case "subir":
      if (thisLi == thisLi.parentElement.firstChild)
        break
      thisLi.parentElement.insertBefore(thisLi, thisLi.previousSibling)
      break
    case "bajar":
      if (thisLi == thisLi.parentElement.lastChild)
        break
      thisLi.parentElement.insertBefore(thisLi, thisLi.nextSibling.nextSibling)
      break
    case "borrar":
      thisLi.parentElement.removeChild(thisLi)
      break
    default:
      break
  }
}

function MostrarOcultarLista() {
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (toggleList.innerHTML == "Ocultar lista") {
    listDiv.style.display = "none"
    toggleList.innerHTML = "Mostrar lista"
  } else {
    listDiv.style.display = ""
    toggleList.innerHTML = "Ocultar lista"
  }
}

function CambiarTextoLista() {
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  if (descriptionInput.value != "") {
    descriptionP.innerHTML = descriptionInput.value
    descriptionInput.value = ""
  }
}

function AñadirElemento() {
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  if (addItemInput.value != "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(addItemInput.value));
    attachListItemButtons(li)
    listUl.appendChild(li);
    addItemInput.value = ""
  }
}