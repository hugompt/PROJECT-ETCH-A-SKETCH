function createGrid(){
    let container = document.getElementsByClassName("gridCont");
    let cell = document.createElement("div");
    cell.textContent = "TEXT";
    container.appendChild(cell);
}

window.onload = function(){
    createGrid();
}