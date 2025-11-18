// let a = prompt("Enter a number");   
// if(a%2 == 0){
//     console.log(`${a} is even number`);
// }else{
//     console.log(`${a}} is odd number`);
// }

// let a = prompt("enter a number");
// if(a>18){
//     console.log("eligible for voting");
// }else{
//     console.log("not eligible for voting");
// }

// let a = prompt("enter a number");
// let b = prompt("enter another number");
// if(a>b){
//     console.log("\a is greater than \(b)");
// }else{
//     console.log("/a is smaller than \(b)");
// }


// function subtraction(a,b){
//     return a*a + b*b + 2*a*b;
// }
// let res = subtraction(3,5);
// console.log(res);

let a = prompt("Enter a number");
let b = Math.random();
let badScore = 0;
let mainSCore = localStorage.getItem("score", badScore);
console.log(mainSCore);
b = Math.floor(b*10)
if(a==b){
    console.log("numbers are matched", b);
    
}else{
    ++mainSCore;
    localStorage.setItem("score",mainSCore);
    console.log("numbers are not matched", b, mainSCore);
}