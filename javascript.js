const container = document.querySelector('#container');

// create the grid
function createGrid(sideSize) {
    if (sideSize > 100) {
        sideSize = 100;
    }

    for (let i = 0; i < sideSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.display = 'flex';

        for (let j = 0; j < sideSize; j++) {
            let grid = document.createElement('div');
            grid.className = 'grid';

            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

// the mouseover
function addMouseover() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.classList.add("hover");
        });
    });
}

// the new grid button
const newGrid = document.querySelector('#newgrid');
newGrid.addEventListener('click', function() {
    let newSize = prompt("Enter new grid size (1-100): ");
    createGrid(newSize);
    addMouseover();



});