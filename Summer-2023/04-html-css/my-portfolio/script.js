const one = document.querySelector("#one");
const modal = document.querySelector("#modal");

// one.addEventListener(onmouseenter, function () {
//   modal.classList.remove("hidden");
// });

function mod() {
  console.log("ventana");
  modal.classList.remove("hidden");
}

function modinverso() {
  console.log("ventana");
  modal.classList.add("hidden");
}
