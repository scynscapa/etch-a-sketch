const container = document.querySelector('#container');

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

function addMouseover() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.classList.add("hover");
        });
    });
}

function clearGrid() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.remove();
    });
}

const newGrid = document.querySelector('#newgrid');
newGrid.addEventListener('click', function() {
    let newSize = prompt("Enter new grid size (1-100): ");
    clearGrid();
    createGrid(newSize);
    addMouseover();
});