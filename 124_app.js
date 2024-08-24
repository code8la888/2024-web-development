function circle(r) {
  console.log(r * r * 3.14);
}

circle(10);

function area(w, h) {
  return w * h;
}

area(10, 4);
console.log(area(10, 4));

function convert(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入溫度:"));
let result = convert(input);
alert("換算後的溫度:" + result);
