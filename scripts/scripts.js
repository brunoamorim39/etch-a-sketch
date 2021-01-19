let resetGrid = function() {
    gridSize = Number(prompt('What grid size would you like? (Max: 100)'));
    if (gridSize <= 100) {
        // Reset grid to blank and initialize with new grid size
        changeSize(gridSize);
    } else {
        // Alert user of max size and prompt them again
        alert('You cannot exceed a 100x100 grid!');
        return resetGrid();
    }
};

let changeSize = function(gridSize) {
    // Removes old grid from container parent
    let oldGrid = document.querySelector("#container");
    while (oldGrid.lastElementChild) {
        oldGrid.removeChild(oldGrid.lastElementChild);
    }

    // Sets new container styling to match updated grid size
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                                grid-template-rows: repeat(${gridSize}, 1fr);
                                width: 100vw; height: 42vw`;

    for (let i = 1; i <= Math.pow(gridSize, 2); i++) {
        let gridSquare = document.createElement('div'); // Create div that will act as grid space
        gridSquare.classList.add('gridSquare'); // Adds .gridSquare to divs
        container.appendChild(gridSquare); // Appends divs to parent container
    
        // Adds event listener to watch for mouseover. Changes background color to black
        gridSquare.addEventListener('mouseover', () => {
            let colorR = Math.ceil(Math.random() * 255);
            let colorG = Math.ceil(Math.random() * 255);
            let colorB = Math.ceil(Math.random() * 255);
            gridSquare.style.cssText += `background-color: rgb(${colorR}, ${colorG}, ${colorB})`;
        });
    };
};

// Initialization for first visit of webpage

let gridSize = 16;
let container = document.querySelector('#container');

for (let i = 1; i <= Math.pow(gridSize, 2); i++) {
    let gridSquare = document.createElement('div'); // Create div that will act as grid space
    gridSquare.classList.add('gridSquare'); // Adds .gridSquare to divs
    container.appendChild(gridSquare); // Appends divs to parent container

    // Adds event listener to watch for mouseover. Changes background color to black
    gridSquare.addEventListener('mouseover', () => {
        let colorR = Math.ceil(Math.random() * 255);
        let colorG = Math.ceil(Math.random() * 255);
        let colorB = Math.ceil(Math.random() * 255);
        gridSquare.style.cssText += `background-color: rgb(${colorR}, ${colorG}, ${colorB})`;
    });
};

// Adds listener for reset click
const button = document.querySelector('button');
button.addEventListener('click', () => {resetGrid()});