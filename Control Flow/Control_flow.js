if (2 === "2"){
    console.log("executed")
}
// <,>,<=,>=,==,!=,===,!==
// === --> this operator checks datatype also 

const temperature = 41
if(temperature<50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

const score = 200
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // This line will give an error because power varibale is out of the block scope.

const balance = 1000

// if(balance>500) console.log.("test"),console.log("test2") // Do not write like this 

if(balance>500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In");
}

