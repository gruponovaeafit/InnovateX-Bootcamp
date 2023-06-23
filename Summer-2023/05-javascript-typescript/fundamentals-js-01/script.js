let js = "amazing";
if (js === "amazing") alert("yuju");
console.log(57 + 37);
let five4 = 5;
let PI = 4.1415;
console.log(PI);

let country = "Colombia";
let continent = "America";
let population = 51.52;

// console.log(country);
// console.log(continent);

// console.log(population);

let massMark = 78;

let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's IBM (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  `John's IBM (${johnBMI}) is higher than Mark's (${markBMI})`;
}

/*const firstname = "Sara";
const now = 2023;
const birthYear = 2004;
const role = "student";


const sara = `I'm ${firstname}, a ${now - birthYear} year old, ${role}`;
console.log(sara)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;

*/

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = true; //C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is avaiable to drive");
} else {
  console.log("Someone else should drive");
}

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("x");
    break;
  case "wednesday":
  case "tuesday":
    console.log("y");
    break; //si no se coloca break se ejecuta la siguiente instruccion tambien
  default:
    console.log("me");
}

const age = 23;
age >= 18 ? console.log("i drink wine") : console.log("i drink juguito hit");

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total cost was ${
    bill + tip
  }`
);

//console.log(person1["name"]); //error

let person1 = {
  name: "Sara",
  edad: 17,
};

person1["edad"] = 18;

console.log("persona1: " + JSON.stringify(person1));

console.log(person1["name"]);

let ejemplo = function () {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
};

ejemplo();

let num = 1;
console.log(1 + []); //convertido en string

console.log(+[]); //0

console.log(!![] + !![]);

let c = []["constructor"];
console.log(c);

let edad = 7;

edad = 19;

console.log(`voy a tomar ${edad >= 18 ? "cerveza" : "jugo"}`);

edad >= 16 ? console.log("quiero vino") : console.log("quiero agua");

/* RETO #1 y #2

Tambien puede hacerse usando objetos

al terminar de ver condicionales y template literals
Mark y John están tratando de comparar sus IMC (Índice de Masa Corporal), que se calcula utilizando la fórmula: IMC = masa / (altura * altura) (masa en kg y altura en metros).

Tu tarea es escribir un código que les ayude:

Almacena la masa y altura de Mark y John en variables llamadas massMark, heightMark, massJohn y heightJohn.

Calcula sus IMC utilizando la fórmula y almacena los resultados en dos variables llamadas BMIMark y BMIJohn.

Registra el valor de BMIMark y BMIJohn en la consola.

BONO: Crea una variable booleana llamada markHigherBMI que contenga información sobre si Mark tiene un IMC más alto que John. También regístralo en la consola.

DATOS DE PRUEBA: Mark pesa 78 kg y mide 1.69 m. John pesa 92 kg y mide 1.95 m.

Usar template literals


CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430 in the bills array. Use a for loop to perform the 10 calculations!


*/
