let nombre = "sara";
console.log(nombre);

let mostraredad = function(){
    let edad = 31;

    if (false) {
        var x = 24
        console.log(edad)
        console.log(x);
    };
    
    console.log(x)
    console.log(edad);
};


const apellido = "ramirez";
console.log(apellido);

let z = 1
let u = "1";

if (z==u){
    console.log("Son iguales");
}
else {
    console.log("no son iguales");
}

let persona1 = {
    name: "Sara",
    Edad:17,
};

console.log(persona1 + JSON.stringify(persona1))

const num2 = 23
const num3 = 43

if(num3 > num2){
    console.log("ta grande");
}

num2 <= num3 ? console.log("es menor"): console.log("no")

let dia = "jueves"
switch(dia){
    case 'lunes':
        console.log("ir al gimnasio");
        break;
    case "martes":
        console.log("Sacar la basura");
        break;
    case "miercoles":
        console.log("hacer tarea");
        break;
    case "jueves":
        console.log("Descanso");
        break;
    default:
        console.log("no existe");
}


let Mark = {
    masa: 78,
    altura: 1.69,
};

let John = {
    masa: 92,
    altura: 1.95,
};

let BMIMark = (Mark['masa']/(Mark['altura']*2));
console.log(BMIMark);

let BMIJohn = (John['masa']/(John['altura']*2));
console.log(BMIJohn);

if(BMIMark > BMIJohn){
    var markHigherBMI = 1;
    console.log(markHigherBMI);
};

const yearsOld = function(fechaNac){
    return 2023 - fechaNac;
};

console.log(yearsOld(2004));

const arrow = (fechaNac) => 2023 - fechaNac;
console.log(arrow(2004));

console.log(
    ((edadNac) => {
        return 2023 - edadNac;
    }) (2002)
);

(function() {
    console.log("a huevo");
}) ()