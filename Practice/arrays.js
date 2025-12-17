let arr = [5, 3, 8, 10, 4, 9, 7, 2];
function filterRange(arr, a, b){
  return arr.filter(item => a<=item && item<=b);
}
let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

function filterRangeInPlace(arr, a, b){
   for(let i=0;i<arr.length;i++) {
    if(arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      // console.log(arr);
      i--;
    }
   };
}
filterRangeInPlace(arr, 1, 4);
// console.log(arr);

let sa = arr.slice().sort((a,b)=>b-a);
// console.log(sa);

let arr1 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr1){
  return arr1.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
}
let sorted = copySorted(arr1);
console.log(sorted);

function Calculator() {
  this.methods = {
    "-": (a,b)=>a-b,
    "+": (a,b)=>a+b
  };
  this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2];
    
    if(!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a,b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
};

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);