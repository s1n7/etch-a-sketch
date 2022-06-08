// Select container div
const container = document.querySelector('#container');

// user input prompt
const customSize = prompt('Please enter the grid size', 16);
const gridSize = customSize;
const squareDivSize = 720/gridSize;

// create reload button and select reload div
const reloadButton = document.createElement('button');
reloadButton.setAttribute('onClick', 'window.location.reload();');
reloadButton.textContent = 'Reload';
const reloadDiv = document.querySelector('#reload');

// fail div for wrong input
const failDiv = document.querySelector('#fail');
const failedInput = document.createElement('p');

// function to check whether user input is valid
function checkInput() {
    if (customSize % 1 !== 0){
        failedInput.textContent = 'Please enter an integer value.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
        return false;
    } else if (customSize < 1) {
        failedInput.textContent = 'Please enter a value greater than 0.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
        return false;
    } else if (customSize > 100) {
        failedInput.textContent = 'Please enter a value smaller than or equal to 100.';
        failDiv.appendChild(failedInput);
        failDiv.appendChild(reloadButton);
        return false;
    } else {
        return true;
    }
}


// function to draw board
function draw() {
    for(let j = 0; j < gridSize; j++){  //create grid
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
    //add event listeners
    const squareDivs = document.querySelectorAll('.squareDiv');
    squareDivs.forEach(squareDiv => {squareDiv.addEventListener('mouseenter', changeColor)});
    
    //function to change color
    function changeColor (e) {
        e.target.style.backgroundColor = 'rgb(0, 0, 0)';
    }
    //add reload button
    reloadDiv.appendChild(reloadButton);
}

// draw grid only if user input is valid
function playGame() {
    if(checkInput()){
        draw();
    }
}

// call play function
playGame();