class Nodo {
    constructor(num) {
        this.num = num;
        this.next = null;
    }
    setNext(nodo) {
        this.next = nodo
    }
}

//################problema1################

const nodo6 = new Nodo(7);
const nodo5 = new Nodo(6);
nodo5.setNext(nodo6);
const nodo4 = new Nodo(5);
nodo4.setNext(nodo5)
const nodo3 = new Nodo(4);
nodo3.setNext(nodo4)
const nodo2 = new Nodo(3);
nodo2.setNext(nodo3)
const nodo1 = new Nodo(2);
nodo1.setNext(nodo2)
const head1 = new Nodo(1);
head1.setNext(nodo1)

//################problema2################

const nodo9 = new Nodo(4);
const nodo8 = new Nodo(3);
nodo8.setNext(nodo9)
const nodo7 = new Nodo(2);
nodo7.setNext(nodo8)
const head2 = new Nodo(1);
head2.setNext(nodo7)

//----------EJERCICIO----------

//encontrar la mitad de una lista enlasada e insertar un nodo, el metodo debe recibir la cabeza de la lista y el numero que debe insertar, y debe retornar la cabeza de la lista

//ej: 1 -> 2 -> 3  insertar 4 respuesta 1 -> 2 -> 4 -> 3
//ej: 1 -> 2 -> 3 -> 4 insertar 28 respuesta 1 -> 2 -> 28 -> 3 -> 4


//----------EJERCICIO----------

//dada una matriz bidimensional de unos y ceros, y tambien una cantidad n, decir cuales son las n filas con menos unos
//si las filas tienen un mismo numero, la primera fila en orden de aparicion se considerara mas pequeña