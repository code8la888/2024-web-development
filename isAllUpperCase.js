const UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function isAllUpperCase(str) {
  if (str.length > 0) {
    let x = 0;
    for (let i = 0; i < str.length; i++) {
      if (UpperLetter.indexOf(str[i]) != -1) {
        x++;
      }
    }
    if (x == str.length) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  } else {
    console.log(false);
    return false;
  }
}

isAllUpperCase("ABCD");
isAllUpperCase("aBcD");
isAllUpperCase("ABCDe");
isAllUpperCase("");
isAllUpperCase("ABcDEFG");
isAllUpperCase("DEEGTHUKI");
