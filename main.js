
var global_RandomNumber;

document.getElementById("update-button").addEventListener("click", ()=>{
  var minRange = getMinRange();
  var maxRange = getMaxRange();
  setMaxRangeElement(maxRange);
  setMinRangeElement(minRange);
  global_RandomNumber = getRandom(minRange, maxRange);
  document.querySelectorAll(".guess-input").forEach(input =>{
  input.min = minRange;
  input.max = maxRange;
    })
})

document.getElementById("submit-button").addEventListener("click", ()=>{
  var name1 = getName1();
  setName1(name1);
  var name2 = getName2();
  setName2(name2);
  var guess1 = getGuess1();
  setGuess1(guess1);
  var guess2 = getGuess2();
  setGuess2(guess2);
  var name1Card1 = getName1();
  setCard1Name1(name1Card1);
  var name2Card1 = getName2();
  setCard1Name2(name2Card1);
  var name1Card3 = getName1();
  setCard3Name1(name1Card3);
  var name2Card3 = getName2();
  setCard3Name2(name2Card3);
  var maxRangeLabel = document.querySelector("#max-number");
  var minRangeLabel = document.querySelector("#min-number");
  displayGuessResults(guess1, "challenger1");
  displayGuessResults(guess2, "challenger2");
})


document.getElementById("reset-button").addEventListener("click", ()=>{
  document.querySelectorAll("input").forEach(input=>{
    input.value = ""
  })
    global_RandomNumber = ""
})


document.getElementById("clear-button").addEventListener("click", ()=>{

document.querySelectorAll(".guess-input").forEach(input=>{
  input.value = ""
})
})


var allChallengerInputs = document.querySelectorAll(".all-challenger-inputs")

allChallengerInputs.forEach(challengerInput => {
  challengerInput.addEventListener("change",()=>{
	  checkIfWeShouldEnableTheSubmitButton();
	  checkIfWeShouldEnableTheClearButton();
	  checkIfWeShouldEnableTheResetButton();
  })
})

var allRangeInputs = document.querySelectorAll(".all-range-inputs");
allRangeInputs.forEach(rangeInput => {
	rangeInput.addEventListener("change",()=>{
		checkIfWeShouldEnableTheUpdateButton();
	})
})


function getRandom(minInput, maxInput) {
  return Math.ceil(Math.random() * (maxInput - minInput) + minInput);
}  

function displayGuessResults(guess, challenger){
  if (guess == global_RandomNumber){
    var resultText = 'BOOM';
    } else if (guess > global_RandomNumber){
      var resultText = 'Too High'
    } else {
      var resultText = 'Too Low'
    }
    if (challenger == 'challenger1'){
      setChallengerOneResultElement(resultText);
    } else {
      setChallengerTwoResultElement(resultText);
    }
}

function setChallengerOneResultElement(resultTextVal) {
  var resultText = document.querySelector("#challenger1-feedback")
  resultText.innerText = resultTextVal
}

function setChallengerTwoResultElement(resultTextVal) {
  var resultText = document.querySelector("#challenger2-feedback")
  resultText.innerText = resultTextVal
}

function checkIfWeShouldEnableTheSubmitButton() {
  var name = getName1();
  var name2 = getName2();
  var guess1 = getGuess1();
  var guess2 = getGuess2();
  if  (name != "" && guess1 != ""){
    enableOrDisableSubmitButton(true)
  } else if (name2 != "" && guess2 != ""){
    enableOrDisableSubmitButton(true);
  } else {
    enableOrDisableSubmitButton(false);
  }}

function checkIfWeShouldEnableTheClearButton() {
  var name = getName1();
  var name2 = getName2();
  var guess1 = getGuess1();
  var guess2 = getGuess2();
  if (name != "" || name2 != "" || guess1 != "" || guess2 != ""){ 
    enableOrDisableClearButton(true);
  } else {
	  enableOrDisableClearButton(false);
  }}

function checkIfWeShouldEnableTheResetButton() {
  var name = getName1();
  var name2 = getName2();
  var guess1 = getGuess1();
  var guess2 = getGuess2();
  var minField = getMinRange();
  var maxField = getMaxRange();
  if (name != "" || name2 != "" || guess1 != "" || guess2 != "" || minField != "" || maxField != "") { 
    enableOrDisableResetButton(true);
  } else {
	  enableOrDisableResetButton(false);
  }}
	
function checkIfWeShouldEnableTheUpdateButton(){
  var minField = getMinRange();
  var maxField = getMaxRange();
  if (minField != "" && maxField != ""){
    enableOrDisableUpdateButton(true);
  } else {
	  enableOrDisableUpdateButton(false);
	}
}

function getMinRange(){
  var minRangeElement = document.querySelector("#min-input");
  var minRangeElementValue = parseInt(minRangeElement.value);
  return minRangeElementValue
}

function setMinRangeElement(minRangeVal) {
  var minRangeLabel = document.querySelector("#min-number");
  minRangeLabel.innerText = minRangeVal
}

function getMaxRange(){
  var maxRangeElement = document.querySelector("#max-input");
  var maxRangeElementValue = parseInt(maxRangeElement.value);
  return maxRangeElementValue
}

function setMaxRangeElement(maxRangeVal) {
  var maxRangeLabel = document.querySelector("#max-number");
  maxRangeLabel.innerText = maxRangeVal
}

function submitButtonEnable() {
  if(document.querySelector("#nameform1").value.length===0) { 
    document.querySelector("#submit-button").disabled = true; 
  } else { 
    document.querySelector("#submit-button").disabled = false;
  }
}

function updateButtonEnable(){
  if(document.querySelector("#min-input").value.length===0) {
    document.quertySelector("#update-button").disabled = true;
  } else {
	  document.querySelector("#update-button").disabled = false;
  }
}

function clearButtonEnable() {
  if(document.querySelector("input").value.length != 0) {
    document.querySelector("#clear-button").disabled = true; 
  } else {
	  document.querySelector("#clear-button").disabled = false;
  }
}

function resetButtonEnable() {
  if(document.querySelector("input").value.length !=0) {
	  document.querySelector("#reset-button").disabled = true;
  } else {
	  document.querySelector("#reset-button").disabled = false;
  }
}

function getName1() {
  var name1Element = document.querySelector("#nameform1");
  var name1ElementValue = name1Element.value
  return name1ElementValue
}

function setName1(setName1Val) {
  var name1Label = document.querySelector("#name-1-input");
  name1Label.innerText = setName1Val
}

function getName2() {
  var name2Element = document.querySelector("#nameform2");
  var name2ElementValue = name2Element.value
  return name2ElementValue
}

function setName2(setName2Val) {
  var name2Label = document.querySelector("#name-2-input");
  name2Label.innerText = setName2Val
}

function getGuess1() {
  var guess1Element = document.querySelector("#guess-input-1");
  var guess1ElementValue = parseInt(guess1Element.value);
  return guess1ElementValue
}

function setGuess1(setGuess1Val) {
  var guess1Label = document.querySelector("#challenger1-score");
  guess1Label.innerText = setGuess1Val
}

function getGuess2() {
  var guess2Element = document.querySelector("#guess-input-2");
  var guess2ElementValue = parseInt(guess2Element.value)
  return guess2ElementValue
}

function setGuess2(setGuess2Val) {
  var guess2Label = document.querySelector("#challenger2-score");
  guess2Label.innerText = setGuess2Val;
}

function enableOrDisableSubmitButton(submitButtonShouldBeDisabled) {
  var submitGuessButtonElement = document.querySelector("#submit-button");
  if (submitButtonShouldBeDisabled == true) {
    submitGuessButtonElement.disabled = false;
    } else {
      submitGuessButtonElement.disabled = true;
    }
}

function enableOrDisableUpdateButton(updateButtonShouldBeDisabled) {
  var updateButtonElement = document.querySelector("#update-button");
  if (updateButtonShouldBeDisabled == true) {
	  updateButtonElement.disabled = false;
  } else {
	  updateButtonElement.disabled = true;
  }
}

function enableOrDisableClearButton(clearButtonShouldBeDisabled) {
  var clearButtonElement = document.querySelector("#clear-button");
  if (clearButtonShouldBeDisabled == true) {
	  clearButtonElement.disabled = false
  } else {
    clearButtonElement.disabled = true
  }
}

function enableOrDisableResetButton(resetButtonShouldBeDisabled) {
  var resetButtonElement = document.querySelector("#reset-button");
  if (resetButtonShouldBeDisabled == true) {
	  resetButtonElement.disabled = false
  } else {
	  resetButtonElement.disabled = true
  }
}

function setCard1Name1(setCard1Name1Val) {
  var card1Name1Label = document.querySelector("#card1-name-1");
  card1Name1Label.innerText = setCard1Name1Val;
}

function setCard1Name2(setCard1Name2Val) {
  var card1Name2Label = document.querySelector("#card1-name-2");
  card1Name2Label.innerText = setCard1Name2Val;
}

function setCard3Name1(setCard3Name1Val) {
  var card3Name1Label = document.querySelector("#card3-name-1");
  card3Name1Label.innerText = setCard3Name1Val;
}

function setCard3Name2(setCard3Name2Val) {
  var card3Name2Label = document.querySelector("#card3-name-2");
  card3Name2Label.innerText = setCard3Name2Val;
}
 
