// function add(a, b) {
//   return a + b;
// }
let add = (a, b)=> a + b;
let res = add(3, 6);

// function subtract(a, b) {
//   return a - b;
// }
let subtract = (a, b) => a-b;
let res1 = subtract(5, 3);

// function isAdult(age) {
//   return age >= 18 ? true : false;
// }
let isAdult = (age) => age>=18 ? true : false;
let res2 = isAdult(56);

// function getFullName(fName, lName) {
//   return fName + lName;
// }
let getFullName = (fName, lName) => fName+lName;
let res3 = getFullName("ram", "patidar");
console.log(res, res1, res2, res3);

function greet(name = "Greet"){
  return name;
}
console.log(greet("thesis"));

let calculatePrice = (price, taxRate = 0.18) => price + price*taxRate/100;
console.log(calculatePrice(400));

let squareOfN = (n) => n*n;
console.log(squareOfN(3));

let cubeOfN = (n) => n*n*n;
console.log(cubeOfN(5));

let celsiusToFahrenheit = (celcius) => 1.8*celcius + 32;
console.log(celsiusToFahrenheit(20));

function areaOfCircle(radius){
  return Math.PI*radius*radius;
}
console.log(areaOfCircle(1));