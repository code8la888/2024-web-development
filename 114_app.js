let x = "abcdefghijklmn";
console.log(x.length);

console.log(x[8]);
// 超出範圍會印出undefined
// console.log(x[35]);
//取得字串最後一個字
console.log(x[x.length - 1]);

//slice切片
console.log(x.slice());
console.log(x.slice(2, 5));
console.log(x.slice(5));
//indexOf
console.log(x.indexOf("n"));

//
console.log(x.toUpperCase());
console.log(x.toLocaleLowerCase());
