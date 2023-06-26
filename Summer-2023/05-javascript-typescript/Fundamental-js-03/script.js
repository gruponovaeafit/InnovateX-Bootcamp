const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");
let persona = []; //me muestra los datos de persona
submit.addEventListener("click", function () {
  let estavacio = false;
  inputs.forEach((input) => {
    let i = input.value.trim();
    persona.push(i);
    // console.log(i);
    if (i.length === 0) {
      estavacio = true;
    }
  });
  if (estavacio) {
    alert("Llena por favor todos los datos");
  } else {
    alert("forms enviado correctamente");
  }
});

console.log(persona);
