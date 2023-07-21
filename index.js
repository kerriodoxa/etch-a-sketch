// Creating sketchbook
const sketchBook = document.createElement('div');

// Inserting sketchbook on the page in the container but before command section
const container = document.querySelector('.container');
container.insertBefore(sketchBook, document.querySelector('.commands'));

// Styling sketchbook
sketchBook.setAttribute('style', 'margin: 20px 0; width: 700px; height: 700px; background-color: white; border: none; border-radius: 3px; box-shadow: 5px -5px 20px grey;');

// Button for creating sketchbook
const sizeBtn = document.querySelector('#grid-btn');

// Inserting sketcbook when sizeBtn is clicked
sizeBtn.addEventListener('click', fillSketchBook);



//  Function that fills the sketcbook, it is based on user input from prompt
function fillSketchBook() {

    // Color picker
    const colorPicker = document.querySelector('#color');
    let div_color = colorPicker.value;
    colorPicker.addEventListener('input', () => {
        div_color = colorPicker.value; // Update color if user changes it
    });
    

    // Creating prompt for user input (grid size)
    const input = prompt("Enter grid size from 16 to 120:");
    const gridSize = parseFloat(input);
    console.log(gridSize)

    // Alert for invalid inputs (grid too large, too small, input is NaN or null)
    if(isNaN(gridSize) || gridSize === null) {
        alert('Invalid grid input! Enter a valid number from 16 to 120.');
        return; // exit the function
    } else if (gridSize < 16) {
        alert('Grid too small! Enter valid number from 16 to 120.');
        return;// exit the function
    } else if (gridSize > 120) {
        alert('Grid too large! Enter valid number from 16 to 120.');
        return; // exit the function
    }

    // Calculating grid size and inserting divs
    for (let i = 0; i < gridSize * gridSize; i++) {
         // Creating boxes inside sketchbook
         let divEl = document.createElement('div');
         // Making boxes visible
         divEl.setAttribute('style', 'height: 100%;');
         sketchBook.appendChild(divEl);  
         
         // Giving divs a color from the input on hover
        divEl.addEventListener('mouseover', () => {
            divEl.style.backgroundColor = div_color;
        });
        }

// Making sketchbook display a grid
sketchBook.style.display = 'grid';
sketchBook.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
sketchBook.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}



// Function that creates new sketchbook
function resetSketchBook() {
    // Clear the sketchbook by removing all child elements
    while (sketchBook.firstChild) {
        sketchBook.removeChild(sketchBook.firstChild);
    }

    // Reset the color picker to its default value (black)
    const colorPicker = document.querySelector('#color');
    colorPicker.value = '#000000'; 

    fillSketchBook();
}

// Adding event listener on resetBtn so it recreates the sketchbook
const resetBtn = document.querySelector('#btn-reset');
resetBtn.addEventListener('click', resetSketchBook);



