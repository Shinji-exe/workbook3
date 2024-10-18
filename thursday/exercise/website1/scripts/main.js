"use strict"

const display = document.getElementById('display')
const buttonOne = document.getElementById("push")

let paragraphOne = document.querySelector("#paragraph1")

let links = document.querySelectorAll("li")

const nameValue = document.getElementById("nameValue")

paragraphOne.style.color = "red";

console.log(paragraphOne)

function clickMe(){
let nameInput = nameValue.value;


    display.innerText = "Hello " + nameInput
}



function placeOrder(){
    let bowlRadio = document.getElementById("bowlRadio");
    let burritoRadio = document.getElementById("burritoRadio")
    let totalAmount = document.getElementById("amountOfMoney")

    totalAmount = 0.00
    
    if(!bowlRadio.checked || !burritoRadio.checked){
        console.log("Please select")
        }

    if(bowlRadio.checked){
    // let showMoney = Number(totalAmount.value

    totalAmount.value = 12.50
    console.log("Grab a bowl")
    }else if(burritoRadio.checked){
    console.log("Grab a burrito")
    }else{
        console.log("Grab a taco")
    }
}

