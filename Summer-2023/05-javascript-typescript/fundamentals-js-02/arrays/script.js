//====================ARRAY====================

let array = ["eso", 24, 'a', -53, true];
//            [0]   [1] [2]  [3]  [4]

console.log("array = " + array);

console.log("array[0] = " + array[0]);


//====================ARRAY 2D====================

let array2d = [[0,0,4],[0,1,2]];

//         [0][0]  [0][1] [0][2] ... etc

console.log("array2d = " + array2d);

console.log("array2d[0][2] = " + array2d[0][2]);


//====================ARRAY RANDOM====================

let arrayHuevo = [[[4,2,4],"si",-28],array2d];

console.log("arrayHuevo = " + arrayHuevo);

console.log("arrayHuevo[0][0][1] = " + arrayHuevo[0][0][1]);

console.log("aaaaaa = " + arrayHuevo[1][0][2]);

//----------PREGUNTA----------

//como llamo al numero 4 que se encuentra dentro del array2d atravez de arrayHuevo?


//====================CAMBIAR ARRAY====================

let arr1 = [1,2,3,4,5];

arr1[3] = true;

console.log("arr1 = " + arr1);


//====================ARRAY PUSH====================

let arr2 = ["alejo", "alejito", "endiablado"];

arr2.push("endiosado");
//arr2 = ["alejo", "alejito", "endiablado", "endiosado"]

console.log("arr2 = " + arr2);


//====================ARRAY POP====================

let arr3 = ["a", "huevo", "._."];

let cosa1 = arr3.pop();
//cosa1 = "._."
//arr3 = ["a", "huevo"]

console.log("arr3 = " + arr3);

arr3.pop();
//arr3 = ["a"]

console.log("arr3 = " + arr3);

//----------PREGUNTA----------

//como saco un solo numero de este array? (ya que si hago pop voy a sacar [9,10,11,12])

let arr4 = [[1,2,3,4][5,6,7,8],[9,10,11,12]];


//====================ARRAY SHIFT====================

let arr5 = [-1,-2,-3,-4];

let cosa2 = arr5.shift();
//cosa2 = -1
//arr5 = [-2,-3,-4]

console.log("arr5 = " + arr5);

//====================ARRAY UNSHIFT====================

let arr6 =  [1,'a', 2, 'b'];

arr6.unshift(0);
//arr6 = [0, 1,'a', 2, 'b']

console.log("arr6 = " + arr6);

//====================ARRAY POP====================

let arr7 = [0,1,2,3,4,5];

let lenArr7 = arr7.length

console.log("lenArr7 = " + lenArr7);