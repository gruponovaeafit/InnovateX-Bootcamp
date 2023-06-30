
const sudmit = document.querySelector("#sudmit");
const inputs = document.querySelectorAll("input");

let persona = []
sudmit.addEventListener("click", function () {
    let estavacio = false
    inputs.forEach((input) => {
        let i =input.value.trim();
        persona.push(i);
        /*console.log(i);*/
        if (i.length === 0) {
            estavacio = true;
        }
    })
    if (estavacio) {
        alert("Asegurese de llenar todos los campos");
    } else {
            alert("forms enviado correctamente");
        }
        
    });
console.log(persona);

