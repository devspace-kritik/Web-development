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
// console.log(sorted);

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
// console.log(result);

let john = { name: "John", surname: "Smith", id: 1, age: 35 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 26 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item=>item.name);
// let names = users.filter(item=>item.name);
// console.log(names);
let usersMapped = users.map(item=>{
  return {fullName : item.name +" "+ item.surname, id: item.id};
});
// console.log(usersMapped);
function sortByAge(arr){
  arr.sort((a,b)=>a.age-b.age);
}
sortByAge(users);
// console.log(users);

let array = [1, 2, 3];
function suffle(arr){
  arr.sort(()=>Math.random()-0.5);
}
suffle(array);
// console.log(array);

function getAverageAge(arr){
 return arr.reduce((sum, curr) => sum + curr.age, 0)/arr.length;
}

// console.log(getAverageAge(users));

function unique(arr) {
  let newArr=[];
  arr.forEach(item => {
    if(!newArr.includes(item)){
      newArr.push(item);
    }
  });
  return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// console.log(unique(strings));

let users1 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(arr){
 return arr.reduce((prev, curr) => {
    prev[curr.id]=curr;
    return prev;
  }, {})
}
let usersById = groupById(users1);
// console.log(usersById);
let tasks = ["Learn JS", "learn React", "build Project"];
function getFirst(arr){
  // return arr[0]
  let [value] = arr.slice(0, 1);
  // console.log(typeof value);
  return value;
}
// console.log(getFirst(tasks));
function getLast(arr){
  let l =arr.length-1;
  // console.log(l);
  // let [last] = arr.slice(l, l+1);
  let [last] = arr.slice(-1);
  return last;
}
// console.log(tasks);
// console.log(getLast(tasks));

function addTasks(tasks, task){
  return [...tasks.slice(), task];
}
// console.log(addTasks(tasks, "Learn Git"));

function removeTask(tasks, index){
  return tasks.toSpliced(index, 1);
}
tasks.map()
console.log(removeTask(tasks, 2));