// 1. Write a function that returns the sum of two numbers.
// 2. Write a function that returns the sum of all numbers regardless of # of params.

// Example
// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

// Hints 
// Arithmetic Operators
// Rest Operators
// forEach()

function sum(params1, params2){
    return params1 + params2;
}
console.log(sum(1, 2));

function totalSum(...param1){
    let total = 0;
    param1.forEach(parElem => {
        total += parElem;
    });
    return total;
}

console.log(totalSum(1,2,3,4,5,6,2));