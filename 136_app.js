let ans = Math.floor(Math.random() * 101);
console.log(ans);
// console.log(ans);
let guess = Number(prompt("請輸入一個0~100的數字:"));
do {
  if (guess > ans) {
    guess = Number(prompt("請繼續輸入一個比" + guess + "小的數字"));
  } else {
    guess = Number(prompt("請繼續輸入一個比" + guess + "大的數字"));
  }
} while (guess != ans); //如果條件為真就會繼續執行迴圈，條件為假就會執行之後的語句
alert("恭喜答對! 答案是:" + guess);
