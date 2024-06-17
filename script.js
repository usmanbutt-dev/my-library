let grid_cells = document.querySelectorAll(".grid-cell");
const tick = `assets/tick.png`
document.addEventListener("DOMContentLoaded",function(){


    grid_cells.forEach(cell => {
        cell.addEventListener("click", () => {
            console.log ("ehe");
            cell.classList.remove("grid-cell");
            cell.classList.add("grid-cell-clicked");
            cell.style.backgroundImage = `url("${tick}")`;
            grid_cells = Array.from(grid_cells).filter(gridCell => gridCell !== cell);            
        }, {once:true});
    })

})