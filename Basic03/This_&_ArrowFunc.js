const user = {
    username: "rishita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website!`)
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);

//function chai(){
//    let username = "rishita"
//    console.log(this.username);
//}
//chai()
//const chai = function (){
//    let username = "rishita"
//    console.log(this.username);
//}
//chai()


// Arrow function

const chai = () => {
    let username = "rishita"
    console.log(this);
    //console.log(this.username);
}

chai()

const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3
}

console.log(addThree(2,1,2));

// Implicit return
const addThree1 = (num1, num2, num3) => (num1 + num2 + num3)
//const addThree1 = (num1, num2, num3) => ({user1name: "ri"})
console.log(addThree1(4,1,2));