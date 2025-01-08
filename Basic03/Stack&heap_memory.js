// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "rishita@rawatdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user1@google.com",
    upiId: "user1@ybl"
}

let user2 = user1

user2.email = "rishita@google.com"

console.log(user1.email);
console.log(user2.email);