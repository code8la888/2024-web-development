let UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function isUpperCase(str) {
  if (str.length > 0) {
    if (UpperLetter.indexOf(str[0]) != -1) {
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

isUpperCase("ABCD");
isUpperCase("aBCD");
isUpperCase("0AbCD");
isUpperCase("");
