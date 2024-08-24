let fruit = ["apple", "banana", "grape", "papaya", "guava"];
fruit.push("strawberry");
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.unshift("blueberry", "avocado");
console.log(fruit);

//array of arrays
let myArr = [
  ["name", "age", "city"],
  ["Amy", 35, "United State"],
  ["Ben", 26, "Mexico"],
];

console.log(myArr[1][0]);
