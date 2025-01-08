// Always use const if the value should not be changed

// Always use const if the type should not be changed (Arrays and Objects)

// Only use let if you can't use const

// Only use var if you MUST support old browsers.

const accountId = 144553
let accountEmail = "rishita@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

console.log([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])