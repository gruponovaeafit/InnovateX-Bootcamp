let mostraredad = function () {
    let edad = 18;
  
    let print = function () {
      let x = 24
      console.log(x);
      console.log(edad);
    };
    console.log(y);
    print();
}
  
  
  //const apellido = "Gonzalez";
  
  //apellido = "Perez";
  
  //console.log(apellido);

  let person2 = {
    name: "Sara",
    edad: 17,
  }

  console.log(person2["name"]);
  console.log(JSON.stringify(person2))

  const num2 = 23
  const num3 = 24

  if (num2 < num3) {
    console.log("ta grande")
  }

  const nombreSimbolo = Symbol("nombre");
  console.log(nombreSimbolo);

  let x = 10 + 5
  x += 10

  num2 <= 43 ? console.log("es menor") : console.log("es mayor")

  const bill1 = 430;
  const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
    console.log(
        `The bill was ${bill1}, the tip was ${tip1}, and the total cost was ${
        bill1 + tip1
        }`
    );

    let mark = {
        massMark : prompt("Ingrese la masa de Mark"),
        heightMark : prompt("Ingrese la altura de Mark"),
      }
      
      let john = {
        massJohn : prompt("Ingrese la masa de John"),
        heightJohn : prompt("Ingrese la altura de John"),
      }
      
      let BMIMark = mark.massMark / (mark.heightMark **2);    
      let BMIJohn = john.massJohn / (john.heightJohn **2);
      
      console.log(`El IMC de Mark es ${BMIMark} y el de John es ${BMIJohn}`);
      
      let markHigherBMI1 = BMIMark > BMIJohn ?   true : false;
      console.log(markHigherBMI1);


const yearsOld = function (edad) {
    return 2023 - edad
}

console.log(yearsOld(18));

const arrow = (fechaNacimiento) => 2023 - fechaNacimiento;

console.log(arrow(18));

console.log(
    ((edadNacimiento2) => {
        return 2023 - edadNacimiento2;
    })(2002)
);

console.log(
    function() {
        console.log("hola");
    }
)()