// create a 16x16 etch a sketch grid
let gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.setAttribute('id', 'gridItem' + i.toString());
    element.classList.add('gridItem');
    gridContainer.appendChild(element);
}

//  add event so when mouse is hovered over a grid item, the background changes from black to white, and vice versa
// this simulates the etch a sketch logic
let gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', (e) => {
        e.target.classList.toggle('black');
    })
})