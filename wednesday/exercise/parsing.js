"use strict"

// let nameOfPerson = "Brenda Kaye";

// let indexing = nameOfPerson.indexOf(" ") // 6 index
// console.log("Name: " + indexing)

// let firstname = nameOfPerson.substring(0,6) //Extracting the first name and making it as a new string.
// console.log("First name: " + firstname)

// let lastname = nameOfPerson.substring(7,11) //Extracting the last name and making it as a new string.
// console.log("Last name: " + lastname)

function parseAndDisplayName(nameOfPerson){
    // let nameOfPerson = "Brenda Kaye";

    let positionOfSpace = nameOfPerson.indexOf(" ") 
    console.log("Index: " + positionOfSpace)
    
    let firstname = nameOfPerson.substring(0,positionOfSpace)//Extract first name before space
    console.log("First name: " + firstname)
    
    let lastname = nameOfPerson.substring(positionOfSpace+1)//Extract last name after space
    console.log("Last name: " + lastname)

    console.log("Name: " + nameOfPerson)

    return nameOfPerson;
}

parseAndDisplayName("Brenda Kaye")
 parseAndDisplayName("Ian Auston")
  parseAndDisplayName("Siddalee Grace")


