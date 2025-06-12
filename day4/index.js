// Understanding Rest and Spread Operator
// Operators used with Array & Objects

let arr = [1, 2, 3];

let arr2 = [...arr, 4, 5, 6]; // spread operator
console.log(arr2);

let object = {
  name: "batman",
  age: "12",
};

let object2 = { ...object, city: "gathamcity" };

console.log(object2);

sum(22, 11, 99, 55, 66, 22, 33);//argumment

function sum(a,b,...value) {// rest operator// parameter
  console.log(value);
}
