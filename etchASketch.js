

// This variables set the value of rows and columns at the global level
let rows = columns = 100;

// This function creates the grid with a loop
function createGrid () {
    for(i = 0; i < (rows * columns); i++){
        // creating the divs
        let pixel = document.createElement('div');
        // appending them to the parent,
        document.getElementById('container').appendChild(pixel);
        // adding event listeners to make them black when overing over them
        pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = "black");
        // adding event listener to make them white when #reset button is pressed
        document.getElementById('reset').addEventListener('click', ()=> pixel.style.backgroundColor = '#eae2e0');
    }
};
// Calling it to have it create the grid when page loads
createGrid();






// This asks the user to enter a value when the restyling button is clicked, but removed because the execution is too slow (bad UX)
// document.getElementById('gridRestyler').addEventListener('click', () => changeGrid());



// This function can be used to change the grid, but is really slow to execute, commented out for UX sake
// function changeGrid () {
//     let newRows = newColumns = prompt("How many squares would you like on each side? (max 100)");
//         document.getElementById('container').style.gridTemplateRows = 'repeat(' + newRows + ', 1fr)';
//         document.getElementById('container').style.gridTemplateColumns = 'repeat(' + newRows + ', 1fr)';
//         for(i = 0; i < (newRows * newColumns); i++){
//             let pixel = document.createElement('div');
//             document.getElementById('container').appendChild(pixel);
//             pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = "black");
//             document.getElementById('reset').addEventListener('click', ()=> pixel.style.backgroundColor = '#eae2e0');
//         }
// }