// 1
let score = null
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))
// 2
let score1 = undefined
console.log(typeof(score1))

let valueInNumber1 = Number(score1)
console.log(valueInNumber1)
console.log(typeof(valueInNumber1))

// 3
let score2 = true
console.log(typeof(score2))

let valueInNumber2 = Number(score2)
console.log(valueInNumber2)
console.log(typeof(valueInNumber2))
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

//4
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));