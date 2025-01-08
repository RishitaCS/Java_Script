// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 868468276824872076n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rishita",
    age: 20,
}

const myFunction = function(){
    console.log("Hello guys");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof anotherId);
console.log(typeof userEmail);
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);
