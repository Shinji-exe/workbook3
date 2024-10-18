function parseAndDisplayName(nameOfPerson){
    // let nameOfPerson = "Brenda Kaye";

    let indexing = nameOfPerson.indexOf(" ") // 6 index
    console.log("Name: " + indexing)
    
    let firstname = nameOfPerson.substring(0,indexing)//Extract first name after space
    console.log("First name: " + firstname)
    
    let lastname = nameOfPerson.substring(indexing+1)//Extract last name after space
    console.log("Last name: " + lastname)

    console.log("Name: " + nameOfPerson)

    if (nameOfPerson.indexOf ) {
    //     return
    // } else if() {
    //     return 
    // }else{
    //  return
    // }

    

  }
  
  parseAndDisplayName("Brenda Kaye")
   parseAndDisplayName("Ian Auston")
    parseAndDisplayName("Siddalee Grace")
  
  
  