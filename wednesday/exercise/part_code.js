'use strict'

const supplierACME = "ACME:123-L";
const supplierDI = "DI:12345-M"
const supplierACE = "1-12"
const colon = ":"
const hyphen = "-"

function getSupplier(code){//return all characters before the :
let space = code.split(":")
let supcode = space[0]
console.log("Supplier Code "+ supcode)
return supcode;
}

getSupplier(supplierACME)
getSupplier(supplierACE)
getSupplier(supplierDI)

function getSupplierVersion2(code){// Proper way
    let positionOfSpace = code.indexOf(colon) // or let positionOfSpace = code.indexOf(":")
let supplier = code.substring(0,positionOfSpace);
return supplier;
}
let supplier = getSupplierVersion2(supplierACME);
console.log(supplier)

function getProduct(code){
let shift = code.indexOf(":")
let shift2 = code.lastIndexOf("-")
let shift3 = code.substring(shift+1,shift2)

// console.log(shift3)

return shift3
}
console.log(getProduct(supplierACME),
getProduct(supplierDI),
getProduct(supplierACE))



function getSize(code){
let positionOfHyphen = code.indexOf("-");
let size = code.substring(positionOfHyphen + 1)
// console.log(size)
return size
}

console.log(getSize(supplierACME), getSize(supplierACE), getSize(supplierDI)) 

