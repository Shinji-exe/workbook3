//Global scope can be used by anything anywhere
let first = "timothy";
//

function printName(){
    //function scope for variables inside a function also known as local scope has to be inside the function
    let first = "DeLeon"; //Function Scope
    //
    console.log(first)
//block scope like if/else, for,while loops
    if(true){ //Block Scope
        let first = "Ricardo"
    }
    //
}

////////////////////////////Exercise Section\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

"use strict";
function test1(){
     let a = 10; // Function/local level
    if(a > 5){//block level code
        a = 7; // grabs from function
    }
    console.log("a = " + a)
}
test1()

// 'use strict'
// function test2A(){
//     //not let or var
//     if(1 == 1){
//         var a = 5; //a not defined because it's in a if which is a block level and its not in either function or global level, but var brings it to function level
//     }
//     console.log("a = " + a)
// }
// test2A()


// function test2B(){
//     if(1 == 1){
//         let a = 5
//     }
//     console.log("a = " + a)
// }

// test2B()


let d = 4 //Global level
function test3(){
    d = 3; //function level 
    console.log("d = " + d) // calls a = 3 because the global a that eqauls 4 is not the same a as it is in the function rendering it a=3
}

test3()
console.log("d = " + d)

let b = 4; //Global
 function test4(){
    let b = 7;// function level declaring a b variable here which is different from the b from global level  
    console.log("b = " + b)//7
 }

 test4()//7
 console.log("b = " + b)//4 calling the global level b variable

 let c = 4;//Global level
 function test5(){
    c = 7;// Function level
    function again(){
        let c = 8; //Funtion level 2
        console.log("c = " + c) //8
    }
    again()//8
    console.log("c = " + c)//7
 }

 test5()//7
 console.log("c = " + c)//4

 let a = 4; //Global Level
 function test6(){
    let a = 7; //Function Level
    function again(){
        let a = 8; //Function Level
        console.log("a = " + a) //8
    }
    again()//8
    console.log("a = " + a)
 }