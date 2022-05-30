const container = document.querySelector('#container');

//create 16 x 16 div grid
for(let j = 0; j < 16; j++){
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    container.appendChild(colDiv);
    for(let i = 0; i < 16; i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        colDiv.appendChild(squareDiv);
    }
}

const squareDivs = document.querySelectorAll('.squareDiv');
squareDivs.forEach(squareDiv => {squareDiv.addEventListener('mouseenter', changeColor)});

function changeColor (e) {
    e.target.style.backgroundColor = 'purple';
}