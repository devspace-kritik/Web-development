var a = Math.random();
let b = Number(prompt("Enter a number"));
let c = Number(prompt("Enter another number"));
let d = prompt("Enter operation");

let result;

if (d == '+') {
  result = a > 0.1 ? b + c : b - c;
} else if (d == '-') {
  result = a > 0.1 ? b - c : b / c;
} else if (d == '*') {
  result = a > 0.1 ? b * c : b + c;
} else {
  result = a > 0.1 ? b / c : b ** c;
}

console.log("Random value: " + a);
console.log("Result: " + result);
let str = "rohan, shami, mosi";