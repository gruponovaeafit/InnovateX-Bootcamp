//===============================EJM 1=================================

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
  
function dragging() {
    document.getElementById("demo1").innerHTML = "The p element 1 is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo1").innerHTML = "The p element 1 was dropped";
}

//===============================EJM 2=================================

const drgItm = document.getElementById("dragtarget2");

drgItm.ondragstart = (event) => {
    event.dataTransfer.setData("Text", event.target.id);
}

drgItm.ondrag = () => {
    document.getElementById("demo2").innerHTML = "The p element 2 is being dragged";
}

const drpItms = document.getElementsByClassName("droptarget");

drpItms[2].ondrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo2").innerHTML = "The p element 2 was dropped";
}

drpItms[3].ondrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo2").innerHTML = "The p element 2 was dropped";
}