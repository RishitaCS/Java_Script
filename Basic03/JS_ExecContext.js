// Javascript Execution Context :-
// 1. Global Execution Context (this)
// 2. Function Execution Context
// 3. Eval Execution Context

// Javascript Code Execution --> includes 2 phases :-
// 1st phase :- Memory Creation Phase
// 2nd phase :- Execution Phase

// Code Execution :-
// 1. Global Execution --> this
// 2. Memory Phase --> 
// val1 -> undefined
// val2 -> undefined
// addNum -> definition
// result1 -> undefined
// result2 -> undefined
// 3. Execution Phase
// val1 <- 10
// val2 <- 5
// addNum --> Execution Context (new varibale environment + Execution thread)
//                      |
//                      V
//             | 1. Memory Phase|  &    | 2. Execution Phase|
//                    |                            |
//                    V                            V
//              val1 -> undefined             num1 -> 10
//              val2 -> undefined             num2 -> 5
//              total -> undefined            total -> 15
