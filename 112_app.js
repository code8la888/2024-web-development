let first_name = "Luna";
let last_name = "Tseng";

// + in string is not addition operator,but String concatenation
console.log(first_name + last_name);
// console.log(first_name * 5); =>nan

let x = 10;
let y = "10";
console.log(x + x); //20(int)
console.log(y + y); //"1010"(tring)
console.log(x + y); //字串和數字進行相加，就會做字串和字串之間的concatenation

let n1 = 20;
let n2 = 30;
let name = "Luna";
let n4 = 15;

console.log(n1 + n2 + name); //50Luna
//城市是由上到下由左到右執行，所以n1+n2=50，再將50和name相加=>Luna
console.log("Hello\nJavaScript"); // 跳脫字元'\n'=>換行
