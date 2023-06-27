let name;
let id;
let carrera;
let correo;
let departamento;

const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");
let persona = [];

class person {
    constructor(name, id, degree, email) {
        this.name = name;
        this.id = id;
        this.degree = degree;
        this.email = email;
    }
}

let listaObjetos = [];

submit.addEventListener("click", function() {
    let estaVacio;
    
    inputs.forEach((input) => {
        let i = input.value.trim();
        persona.push(i);
        if(i.length === 0) {
            estaVacio = true;
        }
        
    }
    );
    let personaEjemplo = new person(persona[0], persona[1], persona[2], persona[3]);
    console.log(personaEjemplo);
    listaObjetos.push(personaEjemplo);
    console.log(listaObjetos);

    if (estaVacio) {
        alert('Alert')
    } else {
        alert('Enviado')
    }
})



