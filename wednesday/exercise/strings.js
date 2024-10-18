"use strict"

let words = "Hello everyone, I'm Elon Musk from Temu";

let amount = words.length;

console.log("This string is " + amount + " words long!")

let quote = 'In Texas, we use the word y\'all often';

console.log(quote)

let s1 = "Hello World";
let s2 = s1.toLowerCase();
let s3 = s1.toUpperCase();
let s4 = s1.trim();

let firstname = "Mark Westley";
let firstLetter = firstname[0];
let positionOfFullName = firstname.indexOf("l")
let positionOfName = firstname.lastIndexOf(" ")
let theFirst = firstname.substring(5,12)
console.log(theFirst)
console.log(positionOfFullName)

let reverse = firstname.split("").reverse().join("");

console.log(reverse)

let ssn = "111-22-3333";

let first3 = ssn.substring(0,3) //111
let second2 = ssn.substring(4,6) //22
let last4 = ssn.substring(7,11) //3333

console.log(first3 + second2 + last4)

let combine = [first3 + " - " + second2 + " - " + last4];
combine = combine.join("")
console.log(combine)