const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const dateTime = document.getElementById("dateTime");
const numberOfNightsField = document.getElementById("numberOfNights");
const totalCost = document.getElementById("totalCost")

const queenBtn = document.getElementById("queen");
const kingBtn = document.getElementById("king");
const bedroomFor2Btn = document.getElementById("2-bedroom");

let numberOfAdults = document.getElementById("numberOfAdults");
let numberOfChildren = document.getElementById("numberOfChildren");

let noneBtn = document.getElementById("none");
let seniorBtn = document.getElementById("senior");
let militaryBtn = document.getElementById("military");

let displayChangeBtn = document.getElementById("displayChange"); //calling line 57
let estimationDisplay = document.getElementById("estimation"); // calling line 40
let showMore = document.getElementById("hide/show");


const queensRoom = 250;
const kingRoom = 250;
const bedroomFor2Room = 350;

const restOfYearQueenRoom = 150;
const restOfYearKingRoom = 150;
const restOfYear2BedroomRoom = 210

const militaryDiscount = 1.20;
const seniorDiscount = 1.10 
let totalAmount = 0;

const offSeasonDate = new Date("2024-09-25")

function calculateCost(){
    
let nights = Number(numberOfNightsField.value);
let selectedDate = new Date(dateTime.value)

let queensAmount = queensRoom 
let kingsAmount = kingRoom 
let bedroomFor2Amount = bedroomFor2Room 

// let offSeasonQueen = restOfYearQueenRoom;
// let offSeasonKing = restOfYearKingRoom;
// let offSeason2Bedroom = restOfYear2BedroomRoom;

if(selectedDate >= offSeasonDate ){
    queensAmount = restOfYearQueenRoom
    kingsAmount = restOfYearKingRoom
    bedroomFor2Amount = restOfYear2BedroomRoom
    }else{
        
    }
    

if(queenBtn.checked){
let addtotalAmount =  queensAmount * nights;
totalAmount = addtotalAmount;
}

if(kingBtn.checked){
let addtotalAmount = kingsAmount * nights;
totalAmount = addtotalAmount;
}

if(bedroomFor2Btn.checked){
let addtotalAmount = bedroomFor2Amount * nights;
totalAmount = addtotalAmount;
}

if(seniorBtn.checked && queenBtn.checked){
    let addtotalAmount =  (queensAmount * nights) / seniorDiscount;
    totalAmount = addtotalAmount;
}

if(militaryBtn.checked && queenBtn.checked){
    let addtotalAmount =  (queensAmount * nights) / militaryDiscount;
    totalAmount = addtotalAmount;
}

if(seniorBtn.checked && kingBtn.checked){
    let addtotalAmount =  (kingsAmount * nights) / seniorDiscount;
    totalAmount = addtotalAmount;
}

if(militaryBtn.checked && kingBtn.checked){
    let addtotalAmount =  (kingsAmount * nights) / militaryDiscount;
    totalAmount = addtotalAmount;
}

if(seniorBtn.checked && bedroomFor2Btn.checked){
    let addtotalAmount =  (bedroomFor2Amount * nights) / seniorDiscount;
    totalAmount = addtotalAmount;
}

if(militaryBtn.checked && bedroomFor2Btn.checked){
    let addtotalAmount =  (bedroomFor2Amount * nights) / militaryDiscount;
    totalAmount = addtotalAmount;
}


let sum = totalAmount

totalCost.value = Number(totalAmount.toFixed(2))

}

function estimateCost() {
    ///////////////////Buttons that check\\\\\\\\\\\\\\\\\\\\\
    let tollButton = document.getElementById("tollButton");
    let gpsButton = document.getElementById("gpsButton");
    let roadsideButton = document.getElementById("roadsideButton");
    //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  
    ///////////////////////////////Fields for money and such!\\\\\\\\\\\\\\\\\\\\\\\\
    let numberOfDaysInput = document.getElementById("numberOfDaysInput");
    const amountDue = document.getElementById("amountDue");
    const basePayField = document.getElementById("basepay");
    const optionField = document.getElementById("options");
    const under25Field = document.getElementById("under25Surcharge");
    ////////////////////////////////////////////////////////////////////////
  
    /////////////////////Radio button\\\\\\\\\\\\\\\\\\\\\\\\\\
  
    let under25 = document.getElementById("25selectYes");
    ///////////////////////////////////////////////////////////////////////
  
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
    let under25Age = 0;
  
    if (tollButton.checked) {
      let sum = tollRate * days;
      optionAmount = optionAmount + sum;
      // basePayField.value = sum
      // console.log(sum)
      // amountDue.value = sum;
    }
  
    if (gpsButton.checked) {
      let sum = gpsRate * days;
      optionAmount = optionAmount + sum;
      // console.log(sum)
      // amountDue.value = sum;
    }
  
    if (roadsideButton.checked) {
      let sum = roadsideRate * days;
      optionAmount = optionAmount + sum;
      // console.log(sum)
      // amountDue.value = sum;
    }
  
    if (under25.checked) {
      let under25Amount = baseRate * under25Surcharge;
      under25Age = under25Amount;
      // under25Surcharge = Number(under25Amount.value);
    }
  
    //   let under25Amount = baseRate * under25Surcharge;
    let totalAmount = rentalAmount + optionAmount + under25Age;
  
    amountDue.value = Number(totalAmount.toFixed(2)); //Shows the total amount on the amountDue field called on line 54 in HTML & line 20 in JavaScript(JS)
    console.log(totalAmount);
  
    basePayField.value = rentalAmount.toFixed(2); //Shows baseRate times the days in the input basePay field/
    console.log(basePayField);
  
    optionField.value = Number(optionAmount.toFixed(2)); //Show the options checked amount total in the options field on line 47 in HTML and line 22 in JavaScript(JS)
    console.log(optionField);
  
    under25Field.value = Number(under25Age.toFixed(2));
    console.log(under25Field);
  }
  
  /////////////To change the display of the estimation div\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  function displayChange() {
    if (displayChangeBtn.checked) {
      estimationDisplay.style.display = "none";
      showMore.innerText = "Show";
    } else {
      estimationDisplay.style.display = "block";
      showMore.innerText = "Hide";
    }
  }
  ////////////////////////////////////////////////////////////////////////////
  