var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

//displays the color being guessed on top of browser.
colorDisplay.textContent = pickedColor;

//toggles the blue background on the easy and hard options nav bar
easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
//toggles the blue background on the easy and hard options nav bar
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        }
    });
    

//reset game if "New Color" or "Play Again?" is clicked
resetButton.addEventListener("click", function (){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = "";
});

//add colors to the squares
for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click event to squares.
    squares[i].addEventListener("click", function(){
        var clcikedColor = this.style.backgroundColor;

        if( clcikedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clcikedColor);
            h1.style.backgroundColor = clcikedColor;
            resetButton.textContent = "Play Again?"
        } else{ 
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
    }
})}

function generateRandomColors(num){
    //make array
    var arr =[]
    //add num to array
        for(var i = 0; i < num; i++) {
        //get random color and push into array
         arr.push(randomColor());
        }
    //return array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function changeColor(color) {
    //loop thrugh all the squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}