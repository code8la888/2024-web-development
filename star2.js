function star2(num) {
  let a = "";
  for (let i = 1; i <= num; i++) {
    a += "*";
    console.log(a);
  }
  let g = "";
  for (let j = num - 1; j >= 1; j--) {
    for (let j = 1; j <= 1; j++) {
      g += "*";
    }
    console.log(g);
  }
}
star2(5);
