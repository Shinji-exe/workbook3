function addNumbersAltVersion(num1, num2) {
   let sum = num1 + num2;
   return sum;
  }
  
let total = addNumbersAltVersion(4, 3);
console.log(total);



function getNumGrandKids(){
    return 6;
}

let num = getNumGrandKids();
console.log(num)

function add(num1, num2){
    let sum = num1 + num2;
    return sum
}

let totalAmount = add(4, 9)
console.log(totalAmount)


function getNumGrandKids2(name){
    let num = 0;

    if (name == "Dana"){
        num = 4
    }else if (name == "Kayla"){
   num =2
    } else if(name == "Sarah"){
        num= 1
    }else{
        num = 0
    }

    return num
}

console.log(getNumGrandKids2("Sarah"))

function multiply(num1,num2){
let multiply = num1*num2;

return multiply;
}

let totalEquals = multiply(4,3)
console.log(totalEquals)


/////////////////////////////Exercise Section\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function convertFtoC(fahrenheit){


return (fahrenheit - 32) * 5 / 9;

}

let currentTemp = 92;
let celciusTemp = convertFtoC(currentTemp)

/////////////////////////////////////////////Celcius to Fahrenheit\\\\\\\\\\\\\\

console.log(celciusTemp.toFixed(1))

let currentTemp2 = 22;

function convertCtoF(celcius){
    return celcius  * 9 / 5 + 32;
}

let fahrenheit = convertCtoF(currentTemp2)
console.log(fahrenheit.toFixed(1))



//////////////////////////end of exercise section\\\\\\\\\\\\\\\\\\\\\\\\\