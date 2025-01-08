//function addTwoNumbers(number1, number2){
//    console.log(number1+number2);
//}
addTwoNumbers(7,5)
addTwoNumbers(7,"5")
addTwoNumbers(7,null)

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,2)
console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rishita"));
console.log(loginUserMessage());
