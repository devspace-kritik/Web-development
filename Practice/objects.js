const obj = {
  name: "kritik",
  age: 19,
  greet: function(){
    return "hello";
  }
}
// console.log(obj);
obj.name = "tanisha";
// console.log(obj);
obj.gender = "female";
// obj.greet();
const clone = Object.assign({}, obj);
clone.gender = "male";
// console.log("this  is clone  "+ clone.greet());
// console.log(obj.greet()===clone.greet());

const user = {
  names: "amit",
  age: 62,
  email: "amit@example.com",
  isAdmin: false,
  skills: ["Javascript", "HTML"]
}
const settings = {
  theme: "dark",
  language: "en",
  notification: true
}
user.age = 26;
user.city = "indore";
delete user.isAdmin;
console.log(user.names+user.email+ user.skills);
console.log(user["isAdmin"]);
for(let key of Object.keys(user)){
  //object.keys returns an array of strings of keys
  console.log(key);
}
for(let [key, value] of Object.entries(user)){
  //Object.entries returns an array containing arrays of key, value 
  console.log(key+"- "+value);
}

