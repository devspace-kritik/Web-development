// let arr = [100, 200, 300, 400, 500];
// arr.push(600);
// console.log(arr);
// // arr.pop()
// // arr.pop()
// // console.log(arr);
// arr.splice(3, 2);
// console.log(arr);

//sum of all numbers

// let arr = [1,2,3];
// let sum = 0;
// for(i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

//find the max number

// let arr = [4,1,2,7];
// let max = arr[0];
// let min = arr[0];
// for(i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);

//count even numbers

// let arr = [1,2,3,4,5];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         count++;
//     }
// }
// console.log(count);

//count ocuurence of a number

// let arr = [1, 2, 2, 1, 2, 3];
// let redArr = [];
// let ocuurence = [];
// function isPresent(num) {
//   let res = false;
//   for (i = 0; i < redArr.length; i++) {
//     if (redArr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (!isPresent(arr[i])) {
//     let count = 1;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     redArr.push(arr[i]);
//     ocuurence.push(count);
//   }
// }
// console.log(redArr, ocuurence);


//Reverse an array

let arr = [1,2,3,4,5];
revArr = [];
for(i=0; i<=arr.length; ){
    let num = arr.pop();
    console.log(num,i);
    revArr.push(num)
}
console.log(revArr);
