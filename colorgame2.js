console.log("js connected");
// variables
var numSquares = 6;
var colors = [];
var pickedColor;
var currentScore = 0;
var highScore = 0
var maxScore = 2000;
var realTimeScore = 2000;
var clicked = false;
//selectors
var squares = document.querySelectorAll(".square");
var colorDisplay =
document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var bottomSquares = document.querySelectorAll(".bottomSquares")
var modeButtons = document.querySelectorAll(".mode");
var scoreDisplay = document.querySelector("#scoreDisplay");
var highScoreDisplay = document.querySelector("#highScoreDisplay");


init();
function init(){
    //mode buttons event listener
setUpModeButtons();    
setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();

    //figure out how many squares to show
    //pick new colors
    //pick a new pickcolor
    //update page to reflect changes
    })
} 
}

function setUpSquares(){
for(var i = 0; i < squares.length; i++){
//add click listeners to squares
    squares[i].addEventListener("click", function(){
//get color from clicked square 
var clickedColor = this.style.background;
        console.log(clickedColor);
    if(clickedColor === pickedColor && !clicked) {
       messageDisplay.textContent = "You can see!";
        resetButton.textContent = "Keeping playing?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        currentScore += realTimeScore ;
        realTimeScore = 2000;
        scoreDisplay.textContent = currentScore;
        findHighScore();
        clicked = true;
    }
    else{
        this.style.background = "#232323";
         messageDisplay.textContent = "You are color blind.";
        findHighScore();
        currentScore = 0;
        scoreDisplay.textContent = currentScore;
        }
       });
//compare click square color to pickedcolor */
    }
}

function reset(){
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
clicked = false;
//change colors of squares  
for(var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.display = "block";
       squares[i].style.background = colors[i];
       }
    else{
        squares[i].style.display = "none";
    }
}
h1.style.background = "rgb(70,130,180)";
}

//Reset function
resetButton.addEventListener("click", function(){
reset()
})
//change squares to correct color
function changeColors(color){
    for(var i= 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length)
   return colors[random]
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num times
    for(var i = 0; i < num; i++){
    //get random color and push in to array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
//pick a "red" from 0-255  
    var r = Math.floor(Math.random() * 256);
//pick a "green" from 0-255   
    var g = Math.floor(Math.random() * 256);
//pick a "blue" from 0-255    
    var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//score tracker
    //setinterval function
var myScore = setInterval(calcScore, 1000);

    //callback function for setinterval function
function calcScore(){
    realTimeScore = realTimeScore - 100;
    }
//high score analyzer
function findHighScore(){
    //save current score to highscore if higher than current highscore
        if(currentScore > highScore){
            highScore = currentScore;
            highScoreDisplay.textContent = highScore; 
        }
    }