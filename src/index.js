import './style/style.css';

let size = 16;
let color = `black`;

const grid = document.getElementById('grid');
const clear = document.getElementById('clear')
const eraser = document.getElementById('eraser')
const currentcolor = document.getElementById('color')
const slider = document.getElementById('slider');
const sizeName = document.getElementById(`size`);

clear.onclick = () => clearGrid();
eraser.onclick = () => eraserActive();
currentcolor.onclick = () => colorActive();
slider.onchange = (e) => changeSize(e.target.value);

//Allows mousedown and dragging to happen in colorChange
let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
};
document.body.onmouseup = () => {
    mouseDown = false;
};

//Create and Set up Grid
function gridsetup () {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size ; i++){
        var box = document.createElement("div");
        box.classList.add("box-element");
        box.addEventListener("mouseover", colorChange, false);
        box.addEventListener("mousedown", colorChange, false);
        grid.appendChild(box);
    }

}

//Change the color of the box-element
function colorChange(e) {
    if (e.type === 'mouseover' && mouseDown === false) return;
        e.target.style.backgroundColor = color;
}

function clearGrid () {
    grid.innerHTML = '';
    gridsetup(size);
}

function eraserActive() {
    color = `white`;
}

function colorActive() {
    color = `black`;
}

function changeSize(value) {
    size = value;
    console.log(value);
    clearGrid();
    sizeName.textContent = `${value} x ${value}`;
}

gridsetup (size);