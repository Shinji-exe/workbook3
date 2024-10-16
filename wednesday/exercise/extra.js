'use strict'

function isEven(num){
    if(num % 2 == 0){
        return true
    } else {
        return false
    }
}

let number = isEven(2)
console.log(number)

function numberOfNumbers(array, num){
for(let i = 0; i < array.length; i++){
    for(let x=1; x < array.length; x++){
        if(array[i] + array[x] == num){
            return true;
        }
    }
}
return false;
}
//                            1,2,3,4
console.log(numberOfNumbers([2,1,4,8,7,3], 5))
//                            0,1,2,3,4

function addNumbers(num1, num2){
    let total = num1 + num2;

    return total;
}

let totalAmount = addNumbers(7,2)
console.log(totalAmount)

function greet(){
    return "Hello, World";
}

console.log(greet())

