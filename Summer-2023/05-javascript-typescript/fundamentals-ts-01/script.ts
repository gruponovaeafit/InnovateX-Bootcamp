/*
Para compilar TS solo hay que escribir tsc .\<nombre archivo .ts> y correrlo, lo cual lo compilara a un archivo js el cual ya podra ser usado y llamado en el html
*/

//======================================DECLARACION======================================

/*
Toda variable puede ser declarada con let, var y const como en JS, pero luego de ponerle un nombre esta tendra que venir acompañada de ":" y el tipo de variable que lleva

<var / let / const> <name> : <type> = <info>;
*/

var hola : string = "a";

var eso : number = 341324;

var asfasf : boolean = true;

var reqw : number[] = [1324, 234, 432];

var qwer : Array<number> = [1234, 234, 432];

var asdrf : string[] = ["Adsfads", "asdfkakjsd"];

var tfyhj : Array<string> = ["Aasdfaasdf", "sadfasd"];

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

var date : Date = new Date();

console.log(date);

var user = {
  name: "Daniel",
  age: 26,
};
console.log(user.name);
//user.location; returns undefined in JS but error un TS

//============================================================================

/*
Las siguientes lineas de codigo no tirar error por el compiladdor de TS debido al uso del tipo 'any' pero no podran ser compiladas ya que causaran error

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n: number = obj;
*/

//======================================TYPE CASTING======================================

/*
Type casting solo es una manera de decir que vamos a cambiar el tipo de variable de una valga la redundancia variable osea que si en un lugar estamos guardando por ejemplo un string vamos a cambiarlo para que guarde un numero
*/

var a : any = "20";

while(a as number > 0) {
  console.log("asf")
  a-=5;
}

while(<number>a > 0) {
  console.log("asf")
  a-=5;
}

//======================================METODOS======================================

/*
Los metodos se pueden declarar casi igual que JS pero con un poco de lo que se puede llamar "sintactic sugar", que significa que te permite escribirlo de una manera mas efectiva y mas bonita

Como viene siento constumbre se tienen que inicialisar los tipos de variables que puede recibir los metodos, pero si no quieres escribir reescribir el metodo pero haceptando otros tipos de variables puede poner que la variable que toma puede ser alguna de una entre comillas lista que pongas utilizando este caracter "|" , tambien puedes hacer que las variables sean opcionales utilizando este caracter "?"
*/

var func = (x : number, y : string | number) => {
  if (typeof y === "number") {
    let num : number = x + y;
    console.log(num)
  } else if (typeof y === "string") {
    for (let i : number = 0; i < x; i++) {
      console.log(y)
    }
  }
};

func(10, 12);
func(3, "aaaaa")

//============================================================================

/*
Esto de aqui es un concepto raro que encontre pero que puede ser util de TS que es el uso de "..." para iterar sobre listas
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

console.log(arr1);

//======================================FUNCTION OVERLOADING======================================

/*
La sobrecarga de metodos en TS siempre tiene que tener 3 formas de definicion en como se cogen las variables, y tienen que estar escritas una despues de la otra

la sobrecarda de metodos en TS se puede pero creo que en general se puede ver como algo poco usual porque es muy feo y muy acaparatoso y ya con la forma como TS te permite seleccionar las variables que vas a coger de diferentes maneras puede ser mucho mejor reestruccutrar la manera de como coges la informacion del metodo a hacer sobrecarga
*/

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
//var d3 = makeDate(1, 3); este genera error ya que solo se haceptan 1 o 3 argumentos

//============================================================================

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
//len(Math.random() > 0.5 ? "hello" : [0]); error porque la funcion no acepta tipo "number[] | string"

/*
una solucion para el problema podria ser escribir el metodo de esta manera eliminano de paso la sobrecarga de metodos

function len(x: any[] | string) {
  return x.length;
}
*/

//======================================TYPE======================================

/*
Los type te prermiten crear tipos como los que ya tiene TS osea number, string, entre otros sin tener que crear clases enteras y con esto poder ordenar 
*/

type User = {
  name: string,
  password?: string,
  ip?: number,
  message?: string[]
}

var user1: User = {name: "juan"};

((user: User) => {
  console.log(user.name);
})(user1);

//============================================================================

type func = (i: number) => number;

var fun: func = () => {
  return 122
}

console.log(fun(12))

//======================================INTERFACE======================================

interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

var rectangle: Rectangle = {
  height: 20,
  width: 10
}

var coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

((rectangle : Rectangle) => {
  console.log(rectangle.height);
})(coloredRectangle);

//======================================NAMESPACE======================================

/*
Al igual que en lenguajes como c++ se creo el namespace para poder ordenar los metodos, clases, interfaces, entre otras cosas que uno crea y que a su vez no se peleen con otras cosas que ya vengan en una libreria y puedan contener el mismo nombre
*/

namespace fisicas {

  export interface vector {
    x : number,
    y : number
  }

  export interface objeto extends vector{
    name : string
  }

  export let mru = (obj: objeto,vec: vector) => {
    obj.x += vec.x;
    obj.y += vec.y;
  }

  const G : number = 9.8;

  export let caialibre = (obj: objeto, time: number) => {
    obj.y += G*time;
  }
}

var human1 : fisicas.objeto = {
  name: "carlos",
  x: 0,
  y: 0
}

fisicas.caialibre(human1, 12);

fisicas.mru(human1, {x: 3, y: 5});

console.log(human1.name);
console.log(human1.x);
console.log(human1.y);

//======================================ENUM======================================

/*
Solo pueden tener numbers o strings

Dentro de la razon por la que existen esporque re perimte documentar mejor al darle nombre a las variables
*/

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum respuestaUser {
  si = 1,
  no = 0
}

var queHacer = (res : respuestaUser) : string => {
  if(res == respuestaUser.si) {
    return "a huevo"
  } else {
    return "no a hevo"
  }
}

console.log(queHacer(respuestaUser.si))

//======================================GENERICS======================================

/*
Los generic se escriben como se vio al inicio con los array y como se vio con type casting te permiten definir con que tipo de variable seria evaluada, una metodo, una variable en si e incluso las clases como se vera mas adelante

y tambien puede ser usada para no tener que escribir complejos sistemas de interfaces, enums o types si lo que se busca es simplesa para metodos que no son tan dependientes del tipo
*/

var funnn = <Type>(uhum : Type) => {
  console.log(uhum)
}

funnn<string>("asdfasdf");
funnn<number>(12341);
funnn<boolean>(true);

//los metodos no requieren que se le ponga los "<>" pero en general son mejores pacticas para saber con que se trabaja
funnn("asdfasdf");
funnn(12341);
funnn(true);

//pueden haber multiples tipos al mismo tiempo
function carlos <T, S>(asd: T,dsa: S) {
  console.log(typeof asd + " carlos lo hizo");
  console.log(typeof dsa + " carlos y lo hizo de nuevo");
}

carlos<string, boolean>("asfd", false);
carlos(12, "asf");

//======================================CLASSES======================================

/*
--strictPropertyInitialization se puede poner esta flag a la hora de compilar el codigo para que nos obligue a no dejar varibales sin constructor o sin ser inizializadas

las clases en TS si permiten utilizar las palabras reservadas private y public 
*/

