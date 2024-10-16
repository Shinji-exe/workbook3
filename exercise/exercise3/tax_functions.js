function getSocSecTax(grossPay, taxRate){

return grossPay * taxRate;
}

let person1 = getSocSecTax(750, 0.062)
let person2 = getSocSecTax(1550, 0.062)
let person3 = getSocSecTax(1100, 0.062)
console.log(person1, person2, person3)

function getMedicareTax(grossPay, taxRate){
return grossPay * taxRate
}

let personOne = getMedicareTax(750, 0.145)
let personTwo = getMedicareTax(1550, 0.145)
let personThree = getMedicareTax(1100, 0.145)

console.log(personOne.toFixed(2), personTwo.toFixed(2), personThree.toFixed(2))

let totalAmount = getMedicareTax()

function getFederalTax(grossPay, withholdCode){

    // let adjustingRate = taxRate;

    if(withholdCode == 0){
      taxRate = 0.023;
    }else if(withholdCode == 1){
taxRate = 0.021;
    }else if(withholdCode == 2){
taxRate = 0.195;
    }else if(withholdCode == 3){
taxRate = 0.185;
    }else{
        adjustingRate = 0.018;
    }

    return grossPay * taxRate;
}

let onePerson = getFederalTax(750, 2)
console.log(onePerson.toFixed(2))