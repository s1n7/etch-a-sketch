const container = document.querySelector('#container');

//create custom size grid
const gridSize = 4;
const squareDivSize = 720/gridSize;
for(let j = 0; j < gridSize; j++){
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    container.appendChild(colDiv);
    for(let i = 0; i < gridSize; i++){
        const squareDiv = document.createElement('div');
        squareDiv.style.width = `${squareDivSize}px`;
        squareDiv.style.height = `${squareDivSize}px`;
        squareDiv.classList.add('squareDiv');
        colDiv.appendChild(squareDiv);
    }
}

const squareDivs = document.querySelectorAll('.squareDiv');
squareDivs.forEach(squareDiv => {squareDiv.addEventListener('mouseenter', changeColor)});

function changeColor (e) {
    e.target.style.backgroundColor = 'purple';
}