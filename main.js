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
  console.log(minInput, maxInput, "input") 
  return Math.ceil(Math.random() * (maxInput.value - minInput.value) + minInput.value)
}

// var getRandom = math.ceil(Math.random() * (maxInput - minInput) + minInput)

var submitButton = document.querySelector("#submit-button");

var guessInput1 = document.getElementById("guess-input-1");
var guessInput2 = document.getElementById("guess-input-2").value;

submitButton.addEventListener("click", displayGuessResults);

function displayGuessResults() {
console.log(guessInput1.value, getRandom(minInput, maxInput))
var randomNumber = getRandom(minInput, maxInput)	
if (guessInput1.value == randomNumber) 
	{
		alert("BOOM")
		return;
	}

	else if (guessInput1.value > randomNumber)
	{
		alert("that's too high")
		return;
	}

	else (guessInput1.value < randomNumber)
	{
		alert("that's too low")
		return;
	}
}


 
