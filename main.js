const container = document.getElementById('container');

document.appendChild(container);

let gridSize = 4;

function addDiv() {
    document.createElement('div');
}

function createGrid(gridSize) {
    for (let index = 0; index < gridSize*gridSize; index++) {
        container.appendChild(addDiv);
    }
}

createGrid()