// singleton **** --> constructor se banega 
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Rishita",
    "full name": "Rishita Rawat",
    [mySym]: "myKey1",
    age: 20,
    location: "Dehradun",
    email: "ri@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Rishita@456gmail.com"
//Object.freeze(JsUser)
JsUser.email = "Rishita@789gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());