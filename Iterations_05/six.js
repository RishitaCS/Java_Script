// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

//console.log("-------------------------------------------")

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

console.log("-------------------------------------------")

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// With scope (curly braces) we need to use the return keyword.
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

const newNums = []

myNums.forEach( (num) => {
    if(num>4) {
        newNums.push(num)
    }
})
console.log(newNums);

console.log("-------------------------------------------")

const books = [
    { title:'Book 1', genre: 'Fiction', publish: 1981, edition: 2004
    },
    { title:'Book 2', genre: 'History', publish: 1951, edition: 2010
    },
    { title:'Book 3', genre: 'Non - Fiction', publish: 1974, edition: 2005
    },
    { title:'Book 4', genre: 'Fiction', publish: 1985, edition: 2004
    },
    { title:'Book 5', genre: 'History', publish: 2002, edition: 2020
    },
    { title:'Book 6', genre: 'Fiction', publish: 1971, edition: 2012
    },
    { title:'Book 7', genre: 'Non - Fiction', publish: 1991, edition: 2014
    },
]

//const userBooks = books.filter( (bk) => bk.genre === 'History')

//const userBooks  = books.filter( (bk) => bk.publish>=2000)

const userBooks  = books.filter( (bk) => bk.publish>=2000 && bk.genre === 'History')
console.log(userBooks);
