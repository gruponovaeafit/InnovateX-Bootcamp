"use strict";

//HTML DOM Document close(): para crear un nuevo documento de HTML

function openNewDoc() {
  document.open();
  document.write("<h1>Hola Mundo</h1>");
  document.close();
}

//Abrir una nueva ventana, y luego abrir un documento

function myFunction() {
  const myWindow = window.open();
  myWindow.document.open();
  myWindow.document.write("<h1>Hello World!</h1>");
  myWindow.document.close();
}

//si fuera con eventListener:
//querySelector --> retorna el primer elemento que coincide con el querySelector

const newwin = document.querySelector(".new-win");

newwin.addEventListener("click", myFunction);

//cargando otro documento HTML:

function closeDocument() {
  /*var newWindow = window.open(
    "https://www.linkedin.com/in/sara-cortes1/",    // --> "_blank" indica que se abrirá una nueva ventana o pestaña. "_self" para abrir en la misma ventana, 
    "_blank");  // "_parent" para abrir en el marco principal o un nombre personalizado para orientar una ventana específica.
  */
  // Load another HTML file
  var newWindow = window.open();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "index2.html", true); //para indicar que la solicitud debe ser asincrónica. Esto significa que la ejecución del código JavaScript continuará sin bloquear hasta que se complete la solicitud.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      newWindow.document.write(xhr.responseText);
      newWindow.document.close();
    }
  };
  xhr.send();
  newWindow.document.write("</body>");
  newWindow.document.write("</html>");
  newWindow.document.close();
}

/*
En el código proporcionado, `xhr.readyState` se compara con el valor `4` y `xhr.status` se compara con el valor `200` para verificar el estado de la solicitud HTTP realizada utilizando `XMLHttpRequest`.

- `xhr.readyState` representa el estado de la solicitud y puede tener diferentes valores numéricos:
  - `0`: UNSENT - La solicitud no ha sido inicializada.
  - `1`: OPENED - La solicitud ha sido configurada.
  - `2`: HEADERS_RECEIVED - La solicitud ha recibido los encabezados.
  - `3`: LOADING - La solicitud está en proceso; los datos están siendo recibidos.
  - `4`: DONE - La solicitud ha sido completada.

- `xhr.status` representa el estado de la respuesta HTTP y se refiere al código de estado HTTP devuelto por el servidor. El código `200` indica una respuesta exitosa.

En el código proporcionado, se verifica si `xhr.readyState` es igual a `4` y `xhr.status` es igual a `200` en la función `onreadystatechange`. Esto se hace para asegurarse de que la solicitud se haya completado correctamente y se haya recibido una respuesta exitosa del servidor antes de escribir el contenido de "another.html" en la nueva ventana.

Si `xhr.readyState` es `4` y `xhr.status` es `200`, significa que la solicitud se ha completado y se ha recibido una respuesta exitosa, por lo que el contenido de "another.html" se puede escribir en la nueva ventana.
*/

// modales y classList ->> ventana que se abre en la página web por encima del contenido activo

const btnsOpenModal = document.querySelectorAll(".mostrar-modal"); //Retorna todos los elementos
//que coincidan con el querySelector
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

console.log(btnsOpenModal); //retorna una lista
console.log(btnsOpenModal[0].textContent); //para ver el contenido que tiene el boton

const openmodal = function () {
  //metodo remove()
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openmodal);
}

const closemodal = function () {
  //metodo add()
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closemodal);

/*
overlay.addEventListener("click", closemodal); //solo se ejecuta cuando se presione 
*/
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  //verificamos si el model esta abierto, lo hacemos mirando las clases
  //si no tiene 'hidden' esta abierto
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal(); //se ejecuta inmediatamente
  }
});

//getElementById ---> 2 formas

const modal1 = document.getElementById("one");
const modal2 = document.querySelector("#two");

modal1.style.backgroundColor = "aquamarine";
modal2.style.backgroundColor = "pink";

// getElementsByClassName()

function gebc() {
  const lista = document.getElementsByClassName("list")[0];
  lista.getElementsByClassName("child")[0].innerHTML = "Hazme el favor";
}

//textcontent

const par = document.querySelector("#par");

//par.textContent = "alejito sapo";

function clon() {
  const node = document.querySelector("#par").lastChild;
  const clone = node.cloneNode(true);
  document.querySelector("#par").appendChild(clone);
}
