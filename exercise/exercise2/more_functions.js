"use strict";

function nameFunction(param1, param2) {
  console.log(param1 + param2);
}

nameFunction("Hello", "James");

function print(message) {
  // message = "Hello There";
  console.log(message);
}

print();
print("Goodbye");

////////////////////////////Exercises Section\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address)
  console.log(city)
  console.log(state)
  console.log(zip)
}

displayMailingLabel("Timothy Lundy", "123 Anytown Ave", "AnyCity", "USA", "11223");
displayMailingLabel("John MArston", "700 Kowloon Ave", "AnyCity", "ASIA", "12345");

function addNumbers(num1, num2) {
  // num1 = 17.99;
  // num2 = 12.99;

  let sum = num1 + num2;
  console.log(sum.toFixed(2));
}

addNumbers(17.99, 12.99);
addNumbers(190, 20)

function addNumbersAltVersion(num1, num2) {
  console.log(num1 + " + " + num2 + " = " + (num1 + num2));
}

addNumbersAltVersion(4, 3);

function displayReceipt(totalDue, amountPaid) {
  totalDue = Number(totalDue);

  amountPaid = Number(amountPaid);

  let totalAmount = totalDue - amountPaid;

  if (totalDue > amountPaid) {
    console.log("Outstatnding balance:" + totalAmount + " dollars");
    return;
  } else if (totalDue < amountPaid) {
    console.log("You overpaid by: " + Math.abs(totalAmount) + " dollars");
    return;
  } else {
    console.log("total amount paid of:" + totalAmount + " dollars remaining");
    return;
  }
}

displayReceipt(200, 200);
displayReceipt(190, 400)
displayReceipt(100, 90)
