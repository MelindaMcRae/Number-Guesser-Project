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
    var name1 = getName1()
        console.log(name1)
    setName1(name1)
        console.log("setName ran")
    var name2 = getName2()
    setName2(name2)
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
        console.log("Get name ran")
    var name1Element = document.querySelector("#nameform1")
        console.log("name form 1")
    var name1ElementValue = name1Element.value
    return name1ElementValue
        console.log("name value ran")
}

function setName1(setName1Val) {
    console.log("set name 1 ran")
    console.log(setName1Val)
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
