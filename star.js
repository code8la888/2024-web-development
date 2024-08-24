function star(num) {
  let a = "";
  for (let i = 1; i <= num; i++) {
    a += "*";
    console.log(a + "\n");
  }
}

star(3);
star(5);
star(7);
star(9);
