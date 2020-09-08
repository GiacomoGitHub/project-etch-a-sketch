
// This loop creates 256 divs, styles them in squares, gives them the class .pixel, and append them as children to #container
    for(i = 0; i < (16 * 16); i++){
        let pixel = document.createElement('div');
        pixel.style.border = 'solid 1px #000'
        pixel.className = 'pixel';
        pixel.innerText = i + 1;
        document.getElementById('container').appendChild(pixel);
    }
