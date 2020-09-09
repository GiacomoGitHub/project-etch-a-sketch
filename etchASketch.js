
// This loop creates 256 divs, gives them the class .pixel, appends them as children to #container, adding also an event listener
    for(i = 0; i < (16 * 16); i++){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        document.getElementById('container').appendChild(pixel);
        pixel.addEventListener("mouseover", function(event) {   
        event.target.style.backgroundColor = "black";})
    }