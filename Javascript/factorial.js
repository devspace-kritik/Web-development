let a = prompt("Enter a number");
let fact = 1;
var arr = [];
let factorial = (num) => {
    for (let index = a; index > 0; index--) {
        fact = fact * index;   
        //  arr.push(index);  
    }
    return fact;
}
console.log("Factorial of number", factorial(a));
console.log(arr);

let val = Array.from(Array(parseInt(a)+1).keys());
let eval =  val.slice(1);
console.log(val.slice(1));

let factWithReduce = eval.reduce((a, b) => {
    return a*b;
})
console.log(factWithReduce);