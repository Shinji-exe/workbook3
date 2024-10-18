"use strict";

// const tollButton = document.getElementById("tollButton")
// const gpsButton = document.getElementById("gpsButton")
// const roadsideButton = document.getElementById("roadsideButton")

let displayChangeBtn = document.getElementById("displayChange")
let estimationDisplay = document.getElementById("estimation")
let showMore = document.getElementById("hide/show")

function estimateCost() {
  let tollButton = document.getElementById("tollButton");
  let gpsButton = document.getElementById("gpsButton");
  let roadsideButton = document.getElementById("roadsideButton");

  let numberOfDaysInput = document.getElementById("numberOfDaysInput");
  const amountDue = document.getElementById("amountDue");
  const basePayField = document.getElementById("basepay");
  const optionField = document.getElementById("options")
  const under25Field = document.getElementById("under25Surcharge")

  let under25 = document.getElementById("25selectYes");

  let days = Number(numberOfDaysInput.value);

//   let displayChange = document.getElementById("displayChange")
//   let estimationDisplay = document.getElementById("estimation")

  const baseRate = 29.99;
  const tollRate = 3.95;
  const gpsRate = 2.95;
  const roadsideRate = 2.95;
  let under25Surcharge = 1.3;

  let rentalAmount = baseRate * days;
  let optionAmount = 0;
  let under25Age = 0

  if (tollButton.checked) {
    let sum = tollRate * days
    optionAmount = optionAmount + sum
// basePayField.value = sum
    // console.log(sum)
    // amountDue.value = sum;
  } 

  if(gpsButton.checked){
    let sum = gpsRate * days
    optionAmount = optionAmount + sum
    // console.log(sum)
    // amountDue.value = sum;
  }

  if(roadsideButton.checked){
    let sum = roadsideRate * days
    optionAmount = optionAmount + sum
    // console.log(sum)
    // amountDue.value = sum;

  }

  if(under25.checked){
    let under25Amount = baseRate * under25Surcharge;
    under25Age = under25Amount;
    // under25Surcharge = Number(under25Amount.value);
  }


  
//   let under25Amount = baseRate * under25Surcharge;
  let totalAmount = rentalAmount + optionAmount + under25Age

amountDue.value = Number(totalAmount.toFixed(2))
  console.log(totalAmount);

 basePayField.value = rentalAmount.toFixed(2)
console.log(basePayField)

optionField.value = Number(optionAmount.toFixed(2))
console.log(optionField)

under25Field.value = Number(under25Age.toFixed(2))
console.log(under25Field)

}

function displayChange(){
        if(displayChangeBtn.checked){
    estimationDisplay.style.display = "none"
    showMore.innerText = "Show"
        }else{
estimationDisplay.style.display = "block"
showMore.innerText = "Hide"
        }
    
   
}