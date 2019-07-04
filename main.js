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
