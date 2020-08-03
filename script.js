const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
var gridSize = 0;
var divGrid = [];


//creates new grid of divs
function makeGrid() {
    container.innerHTML = ""; //resets container
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(i = 0; i < (gridSize*gridSize); i++) {
        divGrid[i] = document.createElement('div');
        divGrid[i].classList.add('grid');
        divGrid[i].setAttribute('style', `background-color: rgb(211, 211, 211)`);
        container.appendChild(divGrid[i]);
    }
}

const create = document.querySelector('button');
create.addEventListener('click', () => {
    gridSize = prompt("How big: ");
    makeGrid();
})

