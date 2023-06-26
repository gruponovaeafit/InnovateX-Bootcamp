let name;
let id;
let carrera;
let correo;
let departamento;

const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");
let persona = [];

console.log(inputs);

submit.addEventListener("click", function() {
    let estaVacio;
    inputs.forEach((input) => {
        let i = input.value.trim();
        persona.push(i);
        console.log(persona);
        if(i.length === 0) {
            estaVacio = true;
        }
    });
    if (estaVacio) {
        alert('Alert')
    } else {
        alert('Enviado')
    }
    
})

