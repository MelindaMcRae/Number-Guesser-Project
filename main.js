//changes the min/max input to reflect in HTML

var minInput = document.querySelector("#min-input");
var maxInput = document.querySelector("#max-input");
var updateButton = document.querySelector("#update-button");
var minNumber = document.querySelector("#min-number");
var maxNumber = document.querySelector("#max-number");

updateButton.addEventListener("click", changeNumbers);

function changeNumbers(e) {
	e.preventDefault();
	minNumber.innerText = minInput.value;
	maxNumber.innerText = maxInput.value;
}

// random value generated
function getRandom(minInput, maxInput) {
  return Math.ceil(Math.random() * (maxInput - minInput) + minInput)
}

// var getRandom = math.ceil(Math.random() * (maxInput - minInput) + minInput)

var submitButton = document.querySelector("#submit-button");

var guessInput1 = document.getElementById("guess-input-1").value;
var guessInput2 = document.getElementById("guess-input-2").value;

submitButton.addEventListener("click", displayGuessResults);

function displayGuessResults() {
	if (guessInput1 == getRandom) 
	{
		alert("BOOM");
	}

	else if (guessInput1 > getRandom)
	{
		alert("that's too high");
	}

	else (guessInput1 < getRandom)
	{
		alert("that's too low");
	}
}


 
