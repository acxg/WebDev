var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3; 
            } else {
                numSquares = 6;
            }
            reset();
        })
    }

}

function setupSquares()
{
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of click square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedcolor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}
function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color) {
    //loop throught all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
    //change each color to match given color
}

function pickColor(){
    var n = Math.floor(Math.random()*colors.length);
    return colors[n];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}