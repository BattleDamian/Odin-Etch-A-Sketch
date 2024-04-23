const container = document.createElement('div');
container.setAttribute('id', 'container');
var containerSize = 400;
container.style.height = `${containerSize}px`;
container.style.width = `${containerSize}px`;
document.body.appendChild(container);
var gridSize = 4;

function createGrid(gridSize) {
    let container = document.getElementById('container');
    for (let i = 0; i < gridSize**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid');
        newDiv.style.height = `${containerSize / gridSize}px`;
        newDiv.style.width = `${containerSize / gridSize}px`;
        container.appendChild(newDiv);
    }
    for (let i = 0; i < document.getElementsByClassName("grid").length; i++) {
        document.getElementsByClassName("grid")[i].addEventListener("mouseover", () => {
            document.getElementsByClassName("grid")[i].style.backgroundColor = "black";
        });
    }
}

function shakeGrid() {
    while (document.getElementsByClassName("grid")[0]) {
        document.getElementsByClassName("grid")[0].remove();
    }
    createGrid(gridSize);
}

function chooseGridSize() {
    shakeGrid();
    gridSize = prompt('Please enter a number between 0-100.', '4');
    createGrid(gridSize); 
}

createGrid(gridSize);
