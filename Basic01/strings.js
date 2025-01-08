const name = "Rishita"
const repoCount = 10

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interposition and better way to represent strings

// Another way of declaring strings:- 
const gameName = new String('Rishi100com')
console.log(gameName);
console.log(gameName[0]); // accessing string indexes
console.log(gameName.__proto__); // accessing object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)  // 4 is exclusive here
console.log(newString);

const anotherString = gameName.slice(-8,4) //?
console.log(anotherString);

const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // ?