# project-etch-a-sketch

This is a project from The Odin Project curriculum to practice DOM manipulation.
It's my second exercise in DOM manipulation, after the "Rock, paper, scissors" project.

Pseudo-code
<!-- ( - = to do / + = done ) -->
+ Create a div with id "heading"
    + Put an h1 element with the title "Etch-a-Sketch"
    + Style the heading so that it has a nice UI
+ Create a div with id "subheading"
    + Put an h2 element with the title "The legendary toy, right in your browser"
    + Style the subheading so that has a nice UI
+ Create a link to your Git Hub
    + Give it the id "github"
    + Use the id in CSS to put it in the bottom left corner using float
+ Create a link to the Wikipedia page of the Etch-a-Sketch toy
    + Title it "The Etch-a-Sketch history"
    + Give it the id "history"
    + Use the id in CSS to put it in the bottom right corner using float
+ Style the webpage
    + background: neutral color
    + text color: neutral
    + font family: minimal
    + general position of all elements: centered
- Create a div in html that contains a 16x16 grid of square divs
    - The inner divs should have the id "pixel"
    - Use js to generate the 16x16 grid (do not copy and paste all the squares as html code!)
    - Use CSS grid as a method to showcase it 
    - Adjust the margins and padding of the squares
- Create a way to track the hovering of the mouse over the divs
    - Event listeners seem the best option. Target the right div nodes
        - Use the id "pixel" to target the right nodes
    - With the hovering, there has to be a change in the color of the div
        - Use js event listeners to change the background color of "pixel" divs
- Ask for the user's input to set the number of squares per side (max 100)
    - Use the html element input
    - Alert the user if the input is not a number
    - Alert the user if the input is > 100
    - Grab the input from the user and use it in a js function that determines the new grid
        - How can you grab it and use it in a function?
    - The space used for the new grid has to be the same as for the original 16x16 one
- Add a button at the top of the screen to clear the current grid
- Add a button to switch from bnw to random colors
- Add a button to switch from random colors to bnw
