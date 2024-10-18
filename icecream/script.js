const scoopAmountField = document.getElementById("amountOfScoops");
const coneButton = document.getElementById("coneButton");
const cupButton = document.getElementById("cupButton");
const sprinklesButton = document.getElementById("sprinklesButton");
const creamButton = document.getElementById("creamButton");
const fudgeButton = document.getElementById("fudgeButton");
const cherryButton = document.getElementById("cherryButton");

const toppingSelector = document.getElementById("toppingSelector");

let basePriceField = document.getElementById("basePriceField");
let taxField = document.getElementById("taxField");
let totalAmountField = document.getElementById("totalAmountField");

let displayAmounts = document.getElementById("displayAmounts");
let displayCheck = document.getElementById("displayCheck");
let displayLabelCheck = document.getElementById("displayCheckLabel");

const firstScoopCost = 2.25;
let additionalScoopCost = 1.25;
let sprinkles = 0.5;
let whippedCreams = 0.25;
let fudges = 1.25;
let cherrys = 0.25;

const taxRate = 0.0975;

function displayToppings() {
  if (cupButton.checked) {
    toppingSelector.style.display = "block";
  }

  if (coneButton.checked) {
    toppingSelector.style.display = "none";
  }
}

function displayAmount() {
  if (displayCheck.checked) {
    displayAmounts.style.display = "block";
    displayLabelCheck.innerText = "Hide";
  } else {
    displayAmounts.style.display = "none";
    displayLabelCheck.innerText = "Show";
  }
}

function calculate() {
  let numberOfScoops = Number(scoopAmountField.value);
  let numberOfAdditionalScoops = numberOfScoops -1

  let basePriceAmount = firstScoopCost * 1 + (numberOfAdditionalScoops * additionalScoopCost);
  
  let totalToppingsCost = 0;

//   if (numberOfScoops > 1) {
//     basePriceAmount = firstScoopCost + additionalScoopCost ;
//   } else {
//     basePriceAmount = firstScoopCost;
//   }

  if (sprinklesButton.checked) {
     totalToppingsCost = totalToppingsCost + sprinkles;

  }

  if (creamButton.checked) {
totalToppingsCost = totalToppingsCost + whippedCreams;
    
  }

  if (fudgeButton.checked) {
 totalToppingsCost = totalToppingsCost + fudges;
    
  }

  if (cherryButton.checked) {
 totalToppingsCost = totalToppingsCost + cherrys;
  }

  let totalSum = basePriceAmount + totalToppingsCost * taxRate;

  basePriceField.value = basePriceAmount.toFixed(2);

  taxField.value = taxRate.toFixed(2);

  totalAmountField.value = totalSum.toFixed(2);
}
