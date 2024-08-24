const UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function position(str) {
  /* 編寫一個名為position的函式，唯一的參數是一個String，
    其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
   */
  for (let i = 0; i < str.length; i++) {
    if (UpperLetter.indexOf(str[i]) != -1) {
      console.log(str[i] + " , " + i);
      return;
    }
  }
}

position("Frfoggg");
position("frfogHgg");
position("FrfogggA");
position("rfo24357ggJg");
