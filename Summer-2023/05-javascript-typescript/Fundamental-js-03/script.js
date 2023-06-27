const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");
let persona = {}; //me muestra los datos de persona
submit.addEventListener("click", function () {
  let estavacio = false;
  inputs.forEach((input) => {
    let i = input.value.trim();
    // persona.push(i);
    // console.log(i);
    if (i.length === 0) {
      estavacio = true;
    }

    if (input.id === "name") {
      persona.name = i;
    } else if (input.id === "id") {
      persona.id = i;
    } else if (input.id === "carrera") {
      persona.carrera = i;
    } else if (input.id === "correo") {
      persona.correo = i;
    }
  });
  if (estavacio) {
    alert("Llena por favor todos los datos");
  } else {
    alert("forms enviado correctamente");
  }
});

console.log(persona);
