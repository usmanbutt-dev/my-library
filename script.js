document.addEventListener("DOMContentLoaded", function() {
    const grid_container = document.querySelector(".grid-container");
    let grid_cells = document.querySelectorAll(".grid-cell");
    const tick = `assets/tick.png`;
    const cross = `assets/cross.png`;

    grid_cells.forEach(cell => {
        cell.addEventListener("click", cellClickHandler, { once: true });
    });

    function cellClickHandler() {
        let cell = this;
        cell.classList.remove("grid-cell");
        cell.classList.add("grid-cell-clicked");
        cell.style.backgroundImage = `url("${tick}")`;

        grid_cells = Array.from(grid_cells).filter(gridCell => gridCell !== cell);
        setTimeout(() => {
            enemy_turn();
        }, 250);
    }

    function enemy_turn() {
        if (grid_cells.length === 0) {
            console.log("No more cells left to select.");
            return; // Exit function if no cells are left
        }

        let randomIndex = Math.floor(Math.random() * grid_cells.length);
        let cell = grid_cells[randomIndex];

        // Remove click listener from the cell that was selected by the enemy
        cell.removeEventListener("click", cellClickHandler);

        cell.classList.remove("grid-cell");
        cell.classList.add("grid-cell-clicked");
        cell.style.backgroundImage = `url("${cross}")`;

        grid_cells = Array.from(grid_cells).filter(gridCell => gridCell !== cell);

        // Check for win condition after enemy's turn
        setTimeout(() => {
            winCheck();
        }, 250);
    }

    function winCheck() {
        // Retrieve the grid container's children (assuming they are the cells)
        let cells = grid_container.children;

        // Create variables for each cell's background image
        const img0 = cells[0].style.backgroundImage;
        const img1 = cells[1].style.backgroundImage;
        const img2 = cells[2].style.backgroundImage;
        const img3 = cells[3].style.backgroundImage;
        const img4 = cells[4].style.backgroundImage;
        const img5 = cells[5].style.backgroundImage;
        const img6 = cells[6].style.backgroundImage;
        const img7 = cells[7].style.backgroundImage;
        const img8 = cells[8].style.backgroundImage;

        // Check for win conditions
        // (Note: Adjust these conditions based on your specific grid layout)

        // Row 1
        if (img0 && img0 === img1 && img0 === img2) {
            console.log('Row 1 has a winner!');
        }

        // Row 2
        if (img3 && img3 === img4 && img3 === img5) {
            console.log('Row 2 has a winner!');
        }

        // Row 3
        if (img6 && img6 === img7 && img6 === img8) {
            console.log('Row 3 has a winner!');
        }

        // Column 1
        if (img0 && img0 === img3 && img0 === img6) {
            console.log('Column 1 has a winner!');
        }

        // Column 2
        if (img1 && img1 === img4 && img1 === img7) {
            console.log('Column 2 has a winner!');
        }

        // Column 3
        if (img2 && img2 === img5 && img2 === img8) {
            console.log('Column 3 has a winner!');
        }

        // Diagonal from top-left to bottom-right
        if (img0 && img0 === img4 && img0 === img8) {
            console.log('Diagonal (top-left to bottom-right) has a winner!');
        }

        // Diagonal from top-right to bottom-left
        if (img2 && img2 === img4 && img2 === img6) {
            console.log('Diagonal (top-right to bottom-left) has a winner!');
        }
    }
    
});