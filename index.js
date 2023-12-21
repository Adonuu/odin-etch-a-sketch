// create 16 divs inside of grid container
let gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.setAttribute('id', 'gridItem' + i.toString());
    element.classList.add('gridItem');
    gridContainer.appendChild(element);
}

let gridItems = document.querySelectorAll('.gridItem');

console.log(gridItems);

gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', (e) => {
        e.target.classList.toggle('black');
        console.log('hovered ' + e.target.id);
    })
})