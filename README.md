# project-etch-a-sketch

This is a project from The Odin Project curriculum to practice DOM manipulation.
It's my second exercise in DOM manipulation, after the "Rock, paper, scissors" project.

Pseudo-code

*** THIS IS ALL TO CREATE A UI ***
+ Create a div with id #heading
    + Put an h1 element with the title "Etch-a-Sketch"
    + Style the heading so that it has a nice UI
+ Create a div with id #subheading
    + Put an h2 element with the title "The legendary toy, right in your browser"
    + Style the subheading so that has a nice UI
+ Create a link to your Git Hub
    + add target="_blank" to have it open in a new tab
    + Give it the id #github
    + Use the id in CSS to put it in the bottom left corner using float
+ Create a link to the Wikipedia page of the Etch-a-Sketch toy
    + add target="_blank" to have it open in a new tab
    + Title it "The Etch-a-Sketch history"
    + Give it the id #history
    + Use the id in CSS to put it in the bottom right corner using float
+ Add buttons like in the toy
    + Use div cirlces
+ Style the webpage
    + background: like the toy
    + text color: like the toy
    + font family: like the toy
    + general position of all elements: like the toy
+ Create a div in html with id #container
    + Put its background color to pearl white
    + You forgot to remove the inner div you initially put here. Once removed, you could finally have all cells inside div #container


*** THIS IS TO PUT THE 16X16 DIVS INSIDE THE CONTAINER ***
+ Test how to create and append to #container only one div with class .pixel
    + One way is the following (from StackOverflow https://stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript/6840399):
        + Create a varialble called div that uses the createElement method on the document node
        + use the style property of this newly created div variable to make it as a square with the same color of #container
        + Give to this new div the class .pixel
        + Use the method getElementById on #container to use the appendChild method on it (in the parentheses put div)
    + How can you add a div 256 times in js? Probably, using DOM manipulation and a loop
        + Studying this StackOverflow answer, you realised that you do not need a function yet (https://stackoverflow.com/questions/20308270/create-multiple-divs-with-the-same-class-javascript), because it would create the divs only once called. Instead, do this:
        + Create a loop with 256 iterations that:
            + creates the variable pixel that creates in the document a new div
            + styles it and gives it the class .pixel
            + runs document.getElementById("container").appendChild(div) each time to append this new div to #container;
    + Put them in a 16x16 grid using CSS
        + From this StackOverflow answer, you can use CSS to display .pixel as inline-block (https://stackoverflow.com/questions/33223511/how-can-i-make-a-40x40-grid-using-divs)
        + Using CSS Grid seems a better option (https://css-tricks.com/snippets/css/complete-guide-grid/):
            + add display: grid as a CSS property of #container
                + add properties in CSS to style the grid to have 16 rows and columns using grif-template-columns and rows
                + 1 fr for each element in the grid to keep it size responsive to the #container


*** THIS IS TO CREATE THE DRAWINGS ***
- Use .addEventListener "mouseover" on the variable pixel inside the loop
    + in it, add a function that changes the background color of .pixel to black using target.style.backgroundColor = "black"


*** THIS IS FOR ADDING ADDITIONAL FUNCTIONS TO THE TOY ***
- Ask for the user's input to set the number of squares per side (max 100)
    - Use the html element input
    - Alert the user if the input is not a number
    - Alert the user if the input is > 100
    - Grab the input from the user and use it in a js function that determines the new grid
        - How can you grab it and use it in a function?
    - The space used for the new grid has to be the same as for the original 16x16 one
- Add a button in html at the top of the screen to clear the current grid
    + give it the id #reset
    + in CSS, give to #reset a 2% bottom margin and the same background color of the #container
- Add a button to switch from bnw to random colors
- Add a button to switch from random colors to bnw
