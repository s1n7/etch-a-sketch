const container = document.querySelector('#container');

const customSize = prompt('Please enter the grid size', 4);
const gridSize = customSize;
const squareDivSize = 720/gridSize;

const reloadButton = document.createElement('button');
reloadButton.setAttribute('onClick', 'window.location.reload();');
reloadButton.textContent = 'Reload';

const failDiv = document.querySelector('#fail');
const failedInput = document.createElement('p');


function checkInput() {
    if (customSize % 1 !== 0){
        failedInput.textContent = 'Please enter an integer value.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
    } else if (customSize < 1) {
        failedInput.textContent = 'Please enter a value greater than 0.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
    } else if (customSize > 100) {
        failedInput.textContent = 'Please enter a value smaller than or equal to 100.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
    } else {
        return;
    }
    return;
}


function draw() {
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
}

function playGame() {
    checkInput();
    draw();
}

playGame();

