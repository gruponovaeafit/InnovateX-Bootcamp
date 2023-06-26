//====================EXAMPLE CLICK 2====================
let fecha = () => {
  document.getElementById("demo").innerHTML = "a huevo";
};

//====================EXAMPLE CLICK 3====================
const button1 = document.getElementById("fecha");

button1.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = "SIUUUUU";
});

//====================EXAMPLE DOUBLE CLCIK====================
const button2 = document.getElementById("doble");
/*
button2.ondblclick = () => {
  alert("a");
};
*/

button2.addEventListener("dblclick", () => {
  alert("a");
});

button2.addEventListener("dblclick", () => {
  document.getElementById("demo").innerHTML = "se cambio";
});
