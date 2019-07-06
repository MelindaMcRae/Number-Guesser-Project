/************* Global Variables/Auto-Execute*****/


/*************** Triggers/Event Clicks **********/
 
//Update Button Trigger
document.getElementById("update-button").addEventListener("click", ()=>{
    var minRange = getMinRange()
    var maxRange = getMaxRange()
    var randomNumber = getRandomNumber()
    console.log(randomNumber)
    setMaxRangeElement(maxRange)
    setMinRangeElement(minRange)
    // buttonEnable()
})

//Submit Button Trigger
document.getElementById("submit-button").addEventListener("click", ()=>{
    var name1 = getName1()
    setName1(name1)
    var name2 = getName2()
    setName2(name2)
    var guess1 = getGuess1()
    setGuess1(guess1)
    var guess2 = getGuess2()
    setGuess2(guess2)
})

//Reset Button Trigger
document.getElementById("reset-button").addEventListener("click", ()=>{
    console.log("reset ran")
})

//Clear Button Trigger
document.getElementById("clear-button").addEventListener("click", ()=>{
    console.log("clear ran")
})

//On Form Change
var allChallengerInputs = document.querySelectorAll(".challenge-inputs")
console.log(typeof allChallengerInputs, allChallengerInputs)
allChallengerInputs.forEach(challengerInput => {
    challengerInput.addEventListener("change",()=>{
    checkIfWeShouldEnableTheSubmitButton()
    })
    console.log(challengerInput)

})

/**************** Actions/Funtions **************/

function getRandomNumber(min, max) {
    // var min = minRange
    // var max = maxRange
    return Math.ceil(Math.random() * (max - min));
}

function getRandom(minInput, maxInput){
var randomNumber = getRandom(minInput, maxInput)	
    if (guessInput1.value == randomNumber) {
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

function checkIfWeShouldEnableTheSubmitButton() {
    var name = getName1();
    var name2 = getName2()
    var guess1 = getGuess1()
    var guess2 = getGuess2()
    console.log(name, guess1)

    if  (name != "" && guess1 != ""){
        console.log("I should be enabled")
        enableOrDisableButton(true)
    } else if (name2 != "" && guess2 != ""){
        console.log("it should enableeeee")
        enableOrDisableButton(true)
    } else {
        console.log ("I should be disabled")
        enableOrDisableButton(false)
    }

}
/******************** HTML/DOM ******************/

// Minimum Ranges, Top Left Box 
function getMinRange(){
    console.log("minRangeRan")
   var minRangeElement = document.querySelector("#min-input")
   var minRangeElementValue = minRangeElement.value
    return minRangeElementValue
}

function setMinRangeElement(minRangeVal) {
var minRangeLabel = document.querySelector("#min-number")
minRangeLabel.innerText = minRangeVal
}

// Maximum Ranges, Top Left Box
function getMaxRange(){
    console.log("max Range Ran")
    var maxRangeElement = document.querySelector("#max-input")
 
    var maxRangeElementValue = maxRangeElement.value
    return maxRangeElementValue
}

// Update Button disabler
function buttonEnable() {
    console.log("Ran Button Enable")
    if(document.querySelector("#nameform1").value.length===0) { 
      document.querySelector("#submit-button").disabled = true; 
      } else { 
        document.querySelector("#submit-button").disabled = false;
      }
}

function setMaxRangeElement(maxRangeVal) {
    console.log("setMaxRangeElement Ran")
    console.log(maxRangeVal)
    var maxRangeLabel = document.querySelector("#max-number")
    console.log(typeof maxRangeLabel, maxRangeLabel)
    maxRangeLabel.innerText = maxRangeVal
}

// Name Input Challenger 1
function getName1() {
    var name1Element = document.querySelector("#nameform1")
    var name1ElementValue = name1Element.value
    return name1ElementValue
}

function setName1(setName1Val) {
    var name1Label = document.querySelector("#name-1-input")
    name1Label.innerText = setName1Val
}

// Name Input Challenger 2
function getName2() {
    var name2Element = document.querySelector("#nameform2")
    var name2ElementValue = name2Element.value
    return name2ElementValue
}

function setName2(setName2Val) {
    var name2Label = document.querySelector("#name-2-input")
    name2Label.innerText = setName2Val   
}

// Guess 1 from Challenger 1
function getGuess1() {
    var guess1Element = document.querySelector("#guess-input-1")
    var guess1ElementValue = guess1Element.value
    return guess1ElementValue
}

function setGuess1(setGuess1Val) {
    var guess1Label = document.querySelector("#challenger1-score")
    guess1Label.innerText = setGuess1Val
}


// Guess 2 from Challenger 2
function getGuess2() {
    var guess2Element = document.querySelector("#guess-input-2")
    var guess2ElementValue = guess2Element.value
    return guess2ElementValue
}

function setGuess2(setGuess2Val) {
    var guess2Label = document.querySelector("#challenger2-score");
    guess2Label.innerText = setGuess2Val;
}

function enableOrDisableButton(buttonShouldBeDisabled) {
    console.log("enable or disable ran")
    var submitGuessButtonElement = document.querySelector("#submit-button")
    console.log(submitGuessButtonElement)
    if (buttonShouldBeDisabled == true) {
        submitGuessButtonElement.disabled = false
    } else {
        submitGuessButtonElement.disabled = true
    }
}

