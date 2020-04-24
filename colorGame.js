var numSquares = 6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorCode = document.getElementById("colorCode");

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorCode.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorCode.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function() {

	this.textContent = "New Colors";

	// Generate new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorCode to match picked color
	colorCode.textContent = pickedColor;
	// Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';

	messageDisplay.textContent = ''
});

colorCode.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

	// Set initial square colors
	squares[i].style.backgroundColor = colors[i];

	// Set click listeners to squares
	squares[i].addEventListener("click", function() {

		// Grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		// Compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;


		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color) {

	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {

		// Make square color match picked color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {

	// Make an array
	var arr = []
	// Repeat num times
	for (var i = 0; i < num; i++) {
		// Get random color and add to array
		arr.push(randomColor())
	}
	// Return array
	return arr
}	

function randomColor() {

	// Pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	// Pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	// Pick blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}