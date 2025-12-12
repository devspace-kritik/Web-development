let sName = "kritik";
let age = 38;
let city = "indore";
console.log(`Name: ${sName}, Age: ${age}, City: ${city}`);

let arr = [
  { name: "ball", price: 10, qty: 5 },
  { name: "bat", price: 20, qty: 2 },
  { name: "gloves", price: 100, qty: 3 },
  { name: "stumps", price: 150, qty: 6 },
  { name: "hat", price: 7, qty: 50 },
];

function calculateSubtotal(items) {
  let newItems = structuredClone(items);
  newItems.forEach((item) => {
    item.subtotal = item.price * item.qty;
  });
  return newItems;
}

let subTotalArr = calculateSubtotal(arr);

function calculateTax(items, taxRate = 0.18) {
  // return items.map(item => ({
  //   ...item,
  //   tax: item.subtotal*taxRate/100
  // }))
  items.forEach((item) => {
    item.tax = (item.subtotal * taxRate) / 100;
  });
}
calculateTax(subTotalArr, 4);
let subTotal = 0, taxTotal = 0;
function calculateTotal(subtotal, tax) {
   subTotal = subtotal.reduce((sum, value) => sum + value, 0);
   taxTotal = tax.reduce((sum, value) => sum + value, 0);
  return subTotal + taxTotal;
}
let arr1 = subTotalArr.map((item) => {
  return item.subtotal;
});
let arr2 = subTotalArr.map((item) => item.tax);
let total = calculateTotal(arr1, arr2);
subTotalArr.map(item=>{
  console.log(`${item.name}\t x${item.qty}\t - ${item.subtotal}rs \t ${item.tax}`);
})
console.log(`---------------------------------------
SubTotal-\t   ${subTotal}rs\t ${taxTotal}
Total- \t\t   ${total}`);

