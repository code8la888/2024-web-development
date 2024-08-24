let myLuckyNumber = [1, 3, 66, 78, 23, 94];
function plus3(x) {
  console.log(x + 3);
}

myLuckyNumber.forEach(plus3);

myLuckyNumber.forEach(function (n) {
  console.log(n + 3);
});

myLuckyNumber.forEach((n) => {
  console.log(n + 4);
});
