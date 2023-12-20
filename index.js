// create 16 divs inside of grid container
let gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.setAttribute('id', 'gridItem' + i.toString());
    gridContainer.appendChild(element);
}