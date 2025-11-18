let arrList = [];

function getData() {
  let input = document.querySelector(".taskInput");
  let value = input.value;

   let pInput = document.querySelector(".priorityInput");
   let pValue = pInput.value;
    arrList.push({name: value, priority: pValue});
    console.log(arrList);
  render(value, pValue);
}
function render(name, priority) {
    let li = document.createElement("li");
    let ul = document.querySelector(".taskList");
    li.innerHTML = name;
    ul.appendChild(li);
  
}
function removeLastTask() {
  arrList.pop();
  let ul = document.querySelector(".taskList");
  let item = ul.lastElementChild;
  if (item) {
    let child = ul.removeChild(item);
    console.log(arrList);
    
  }
}
