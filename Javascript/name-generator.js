let a = Math.random();
let b = Math.random();
let c = Math.random();
let first, second, third;
if (a < 0.33) {
  first = "crazy";
} else if (a >= 0.33 && a <= 0.66) {
  first = "Amazing";
} else {
  first = "Fire";
}
if (b < 0.33) {
  second = "Engine";
} else if (a >= 0.33 && a <= 0.66) {
  second = "Goods";
} else {
  second = "Garments";
}
if (c < 0.33) {
  third = "Another World";
} else if (a >= 0.33 && a <= 0.66) {
  third = "Bros";
} else {
  third = "Limited";
}
console.log(`${first} ${second} ${third}`);