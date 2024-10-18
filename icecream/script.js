const scoopAmountField = document.getElementById("amountOfScoops")
const coneButton = document.getElementById("coneButton")
const cupButton = document.getElementById('cupButton')
const sprinklesButton = document.getElementById("sprinklesButton")
const creamButton = document.getElementById("creamButton")
const fudgeButton = document.getElementById("fudgeButton")
const cherryButton = document.getElementById("cherryButton")

const toppingSelector = document.getElementById("toppingSelector");

let basePriceField = document.getElementById("basePriceField")
let taxField = document.getElementById("taxField")
let totalAmountField = document.getElementById("totalAmountField")

let displayAmounts = document.getElementById("displayAmounts") 
let displayCheck = document.getElementById("displayCheck")
let displayLabelCheck = document.getElementById("displayCheckLabel")

let baseAmount = 2.25;
let additionalScoops = 1.25;
let sprinkles = .50;
let whippedCreams = .25;
let fudges = 1.25;
let cherrys = .25;

const taxRate = 8.875

function displayToppings(){
    
    if(cupButton.checked){
        toppingSelector.style.display = "block"
    }
    
    if(coneButton.checked){
        toppingSelector.style.display = "none"
    }
}

function displayAmount(){
    if(displayCheck.checked){
    displayAmounts.style.display = "block";
    displayLabelCheck.innerText = "Hide"
    }else{
        displayAmounts.style.display = "none"
        displayLabelCheck.innerText = "Show"
    }
}

function calculate(){


    let scoopAmountInput =  Number(scoopAmountField.value)
        
    let applyAddition = baseAmount * scoopAmountInput * taxRate;
    let Sum = 0;

    if(scoopAmountInput > 1){
applyAddition = baseAmount + additionalScoops * scoopAmountInput;
    }else{
     applyAddition = baseAmount
    }

    if(sprinklesButton.checked){
    let add = Sum + sprinkles;
    Sum = add;
    }

    if(creamButton.checked){
        let add = Sum + whippedCreams;
        Sum = add;
    }

    if(fudgeButton.checked){
        let add = Sum + fudges;
        Sum = add
    }

    if(cherryButton.checked){
        let add = Sum + cherrys;
        Sum = add;
    }

    let totalSum = applyAddition + Sum * taxRate

    basePriceField.value = applyAddition.toFixed(2)

    taxField.value = taxRate.toFixed(2)

    totalAmountField.value = totalSum.toFixed(2)

    

}