const container = document.createElement('div');
container.setAttribute('id', 'container')
document.body.appendChild(container);

var gridSize = 4;

function createGrid(gridSize) {
    let container = document.getElementById('container');
    for (let i = 0; i < gridSize**2; i++) {
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}

createGrid(gridSize);