

    for(i = 0; i < 256; i++){
        let pixel = document.createElement("div");
        pixel.style.width = "10px";
        pixel.style.height = "10px";
        pixel.style.background = "#eae2e0";
        pixel.style.border = 'solid 1px #000'
        pixel.className = 'pixel';
        document.getElementById("container").appendChild(pixel);
    }

