// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in milliseconds

console.log(myCreatedDate.getTime()); 
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// imp method 
// customizing "toLocaleString" 
newDate.toLocaleString('default', {
    weekday:"long",
    timeStyle:"long"
})