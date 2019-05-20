console.log("JS loaded")

randomizeSquaresColor();
displayColor(chooseRandomSquare());

gamePlay();

function generateSquares(num) {

}

function displayColor(square) {
    var colorDisplay = document.querySelector("#colorDisplay");
    var color = square;
    colorDisplay.textContent = square.style.backgroundColor;
}

function chooseRandomSquare() {
    var squares = document.querySelectorAll(".square");
    var randIdx = Math.floor(Math.random()*squares.length);
    return squares[randIdx]
}

function randomizeSquaresColor() {
    var squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = generateRandomColor();
    }
}

function changeSquaresColor(correctColor) {
    var squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = correctColor;
    }
}

function generateRandomColor() {
    var r = String(Math.floor(Math.random()*256));
    var g = String(Math.floor(Math.random()*256));
    var b = String(Math.floor(Math.random()*256));
    return `rgb(${r}, ${g}, ${b})`
}

function gamePlay() {
    var squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(e){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === document.querySelector("#colorDisplay").textContent){
                document.getElementById("clue").textContent = "Correct!"
                document.querySelector(".header").style.backgroundColor = this.style.backgroundColor
                changeSquaresColor(this.style.backgroundColor)
            } else {
                this.classList.add("fade")
                document.getElementById("clue").textContent = "Try Again!"
            }
        });
    }
    displayColor(chooseRandomSquare());
}

