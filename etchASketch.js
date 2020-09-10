

// This loop creates 256 divs, gives them the class .pixel, appends them as children to #container, adding also an event listener
    // for(i = 0; i < (16 * 16); i++){
    //     let pixel = document.createElement('div');
    //     pixel.className = 'pixel';
    //     document.getElementById('container').appendChild(pixel);
    //     pixel.addEventListener('mouseover', function(event) {   
    //         event.target.style.backgroundColor = "black";})
    // };

// This event listener reloads the webpage when the user presses the #reset button
// document.getElementById('reset').addEventListener('click', ()=> window.location.reload());

// This event listener runs the forEach method that changes the bckg color of .pixel divs when the user presses the #reset button
//  document.getElementById('reset').addEventListener('click', ()=> document.getElementById('container').style.backgroundColor = 'orange');



// let rows = 100;
// let columns = 100;

//     for(i = 0; i < (rows * columns); i++){
//         let pixel = document.createElement('div');
//         document.getElementById('container').appendChild(pixel);
//         pixel.addEventListener('mouseover', function(event) {   
//             event.target.style.backgroundColor = "black";});
//         let targetedPixel = pixel;
//         document.getElementById('reset').addEventListener('click', ()=> targetedPixel.style.backgroundColor = '#eae2e0');
//     };

let rows = columns = 100;

    for(i = 0; i < (rows * columns); i++){
        let pixel = document.createElement('div');
        document.getElementById('container').appendChild(pixel);
        pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = "black");
        document.getElementById('reset').addEventListener('click', ()=> pixel.style.backgroundColor = '#eae2e0');
    };
    