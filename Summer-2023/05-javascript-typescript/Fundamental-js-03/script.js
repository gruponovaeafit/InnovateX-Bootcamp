
// const submit = document.querySelector("#submit"); //submit es id, por eso numeral
// const inputs = document.querySelectorAll("input");
// personas = [];


// submit.addEventListener('click', function(){
//     let estavacio = false
//     inputs.forEach((input)=>{
//         let i = input.value.trim(); //El trim es para quitar los espacios al comienzo y al final
//         if (i.length ===0){
//             estavacio = true;
//         }
//     });

// });
// if (estavacio){
//     alert("Asegurate de llenar todos los campos");
// }
// else{
//     alert("form enviado correctamente");
// }

let name;
let id;
let carrera;
let correo;

const submit = document.querySelector("#submit"); //queryselector va a tomar los valores de submit y los pondrá en la variable sumit
const inputs = document.querySelectorAll("input");
let persona = [];

class person {
    constructor(name, id, carrera, correo) {
        this.name = name;
        this.id = id;
        this.carrera = carrera;
        this.correo = correo;
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


