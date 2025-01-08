// array

const myArr = [10, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(0)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(1));

console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // manipulates the original array
console.log("C",myArr);
console.log(myn2);
