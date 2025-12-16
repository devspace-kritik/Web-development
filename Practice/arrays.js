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
      console.log(arr);
      i--;
    }
   };
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);

let sa = arr.slice().sort();
console.log(sa);