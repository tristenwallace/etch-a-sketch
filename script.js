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
        divGrid[i].setAttribute('style', `background-color: rgb(205, 205, 205)`);
        container.appendChild(divGrid[i]);
    }
}

const create = document.querySelector('button');
create.addEventListener('click', () => {
    gridSize = prompt("How big: ");
    makeGrid();
})

container.addEventListener('mouseover', () => {
    let oldColor = event.target.style.backgroundColor;
    let box = event.target;
    let darken = 20;
    let newColor = 0;
    console.log(oldColor, box);
    if (oldColor.charAt(6) == ',') {
        newColor = (oldColor.slice(4, 6) - darken);
    } else
    {
        newColor = (oldColor.slice(4, 7) - darken);
    }
    if (newColor > 0)  
    {
        event.target.setAttribute('style', `background-color: rgb(${newColor}, ${newColor}, ${newColor})`);
    }
})