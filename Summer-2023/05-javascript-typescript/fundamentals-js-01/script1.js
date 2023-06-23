let edad = 17;
let carrera = "Ingenieria de Sistemas";

edad = 17;

edad = 20;
// carrera = "Ingenieria de Producto";

console.log(`yo tengo ${edad} años y estudio ${carrera}`);

console.log(`yo quiero tomar ${edad >= 18 ? "cerveza" : "jugo"}`);

const factura = 275;

function logger() {
  console.log("welcome to js course");
}

// switch

const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("sacar la basura");
    break;
  case "wednesday":
    console.log("ver nuevo episodio de x serie");
  case "tuesday":
    console.log("lavarme el pelo");
    break; //si no se coloca break se ejecuta la siguiente instruccion tambien
  default:
    console.log("leer libro nuevo");
}

//tip es una expresion ->>> prduce un valor
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total cost was ${
    bill + tip
  }`
);

// Funciones

function logger() {
  console.log("hi");
}

//invocando la funcion
logger();

function fruitprocessor(apples, oranges) {
  console.log(apples, oranges); //imprime cuantas manznas y naranjas entraron
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitprocessor(3, 4));

// Function Expression

const age = function (birthyear) {
  //funcion anonima
  return 2023 - birthyear;
};
//la invocamos
const age2 = age(2005);
console.log(age2);

// Arrow functions

const age1 = (birthYear) => 2023 - birthYear;
const num = age1(1991);
console.log(age1);

//se debe usar return y los {} cuando hay mas de dos lineas en la funcion, para explicitamente
//indicar que se quiere devolver
//tambien cuando hay +1 parametro, se deben envolver en ()

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "sara")); // el retorno ocurre de manera implicita

// Funciones y llamar funciones

function cutInPieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutInPieces(apples);
  const orangePieces = cutInPieces(oranges);
  console.log(apples, oranges); //imprime cuantas manznas y naranjas entraron
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitprocessor(2, 3));
