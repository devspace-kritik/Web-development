function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUser(name, callback) {
  callback(name);
}

processUser("Amit", greet);

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myForEach([1, 2, 3], (value, index) => {
  console.log(index, value);
});

function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const doubled = myMap([1, 2, 3], x => x * 2);
