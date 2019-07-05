/************* Global Variables/Auto-Execute*****/


/*************** Triggers/Event Clicks **********/
 
//Update Button Trigger
document.getElementById("update-button").addEventListener("click", ()=>{
    console.log("i ran")
    var minRange = getMinRange()
    console.log(minRange)
    var maxRange = getMaxRange()
    console.log(maxRange)
    setMaxRangeElement(maxRange)
    setMinRangeElement(minRange)
})

//Submit Button Trigger
document.getElementById("submit-button").addEventListener("click", ()=>{
    console.log("submit ran")
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

