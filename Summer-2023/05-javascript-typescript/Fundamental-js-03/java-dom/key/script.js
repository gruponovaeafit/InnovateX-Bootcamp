function keydownFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
  document.getElementById("demo").style.backgroundColor = "green";
}

const juego = document.getElementById("juego");
const juegoCtx = juego.getContext("2d"); 

let player = {x: 0, y: 0};

juegoCtx.fillStyle = "#FF0000";

document.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        player.x +=5;
       juegoCtx.fillRect(player.x, 0, 150, 75); 
    }
})
