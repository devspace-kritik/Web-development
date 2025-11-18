// console.log("this is javascript");
// var a = 710;
// let b = 110;
// console.log("this is start", a, b);

// {
//   var a = 30;
//   let b = 340;
//   console.log(a, b);
// }
// console.log(a, b);

function random(number){
  let c = Math.floor(Math.random()*number);
  console.log(c)
return c;
}
let value = document.querySelectorAll(".box")
value.forEach(element => {
  console.log(element);
  element.style.color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
element.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
console.log(value, element.backgroundColor);
});