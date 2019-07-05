/************* Global Variables/Auto-Execute*****/


/*************** Triggers/Event Clicks **********/
 
//Update Button Trigger
document.getElementById("update-button").addEventListener("click", ()=>{
    var minRange = getMinRange()
    var maxRange = getMaxRange()
    setMaxRangeElement(maxRange)
    setMinRangeElement(minRange)
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


/**************** Actions/Funtions **************/



/******************** HTML/DOM ******************/
function getMinRange(){
    console.log("minRangeRan")
   var minRangeElement = document.querySelector("#min-input")
   var minRangeElementValue = minRangeElement.value
    return minRangeElementValue
}

function getMaxRange(){
    console.log("max Range Ran")
    var maxRangeElement = document.querySelector("#max-input")
    console.log(typeof maxRangeElement, maxRangeElement)
    var maxRangeElementValue = maxRangeElement.value
    return maxRangeElementValue
}

function setMaxRangeElement(maxRangeVal) {
    console.log("setMaxRangeElement Ran")
    console.log(maxRangeVal)
    var maxRangeLabel = document.querySelector("#max-number")
    console.log(typeof maxRangeLabel, maxRangeLabel)
    maxRangeLabel.innerText = maxRangeVal
}

function setMinRangeElement(minRangeVal) {
        console.log("min range val ran")
        console.log(minRangeVal)
    var minRangeLabel = document.querySelector("#min-number")
        console.log(typeof minRangeLabel, minRangeLabel)
    minRangeLabel.innerText = minRangeVal
}

function getName1() {
    var name1Element = document.querySelector("#nameform1")
    var name1ElementValue = name1Element.value
    return name1ElementValue
}

function setName1(setName1Val) {
    var name1Label = document.querySelector("#name-1-input")
    name1Label.innerText = setName1Val
}

function getName2() {
    var name2Element = document.querySelector("#nameform2")
    var name2ElementValue = name2Element.value
    return name2ElementValue
}

function setName2(setName2Val) {
    var name2Label = document.querySelector("#name-2-input")
    name2Label.innerText = setName2Val   
}

function getGuess1() {
    var guess1Element = document.querySelector("#guess-input-1")
    var guess1ElementValue = guess1Element.value
    return guess1ElementValue
}

function setGuess1(setGuess1Val) {
    var guess1Label = document.querySelector("#challenger1-score")
    guess1Label.innerText = setGuess1Val
}

function getGuess2() {
    var guess2Element = document.querySelector("#guess-input-2")
    var guess2ElementValue = guess2Element.value
    return guess2ElementValue
}

function setGuess2(setGuess2Val) {
    var guess2Label = document.querySelector("#challenger2-score")
    guess2Label.innerText = setGuess2Val
}