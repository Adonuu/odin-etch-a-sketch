
function createGrid(size) {
    // grab the container to place the grid within
    let gridContainer = document.querySelector('#gridContainer');

    // generate the elements into the container
    for (let i = 0; i < (size * size); i++) {
        const element = document.createElement('div');
        element.setAttribute('id', 'gridItem' + i.toString());
        element.classList.add('gridItem');
        gridContainer.appendChild(element);
    }
    
    // update the width of the items, this is done by updating the css variable gridItemWidth
    let gridItemWidth = 100 / size;
    gridItemWidth.toString;
    gridItemWidth = gridItemWidth + '%';
    document.documentElement.style.setProperty('--gridItemWidth', gridItemWidth);

    //  add event so when mouse is hovered over a grid item, the background changes from black to white, and vice versa
    // this simulates the etch a sketch logic
    let gridItems = document.querySelectorAll('.gridItem');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('black');
        });
    });
}

function removeGrid() {
    // grab the container to remove the grid from
    let gridContainer = document.querySelector('#gridContainer');
    // loops through until the grid container has no more children, removing the grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

// run createGrid function on startup to create a 16x16 grid
createGrid(16);

// create event on newGrid button to do the following
// prompt the user for the new grid size max (100x100)
// remove the current grid
// generate a new grid with the user size
let button = document.querySelector('#newGrid');
button.addEventListener('click', () => {
    let newSize = prompt('Please enter the new number of rows/columns for the grid:');
    if (newSize > 100) newSize = 100;
    removeGrid();
    createGrid(newSize);
})
