const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(this);
// //console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chai aur code", 11, false);
console.log(userOne);
//console.log(userOne.constructor);
console.log(userTwo);

// 'new' keyword : 1) An empty object is created which is known as instance.
//                 2) A constructor function gets called due to 'new' keyword.
//                 3) Arguments get injected in the this keyword. 
//                 4) U got all the things in function!!!

