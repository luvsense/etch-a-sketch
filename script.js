const container = document.querySelector('.container');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    newDiv.addEventListener('mouseover', changeColor);
    container.appendChild(newDiv);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = 'red';
}
createGrid();
