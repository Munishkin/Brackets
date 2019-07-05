module.exports = function check(str, bracketsConfig) {
  let leftBrackets = [];
  let rightBrackets = [];
  let similarBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    leftBrackets.push(bracketsConfig[i][0]);
    rightBrackets.push(bracketsConfig[i][1]);
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      similarBrackets.push(bracketsConfig[i][0]);
    }
  }
  let stackOfBrackets = [];
  for (let i = 0; i < str.length; i++) {
    if (leftBrackets.includes(str[i])) {
      if (similarBrackets.includes(str[i]) && stackOfBrackets[stackOfBrackets.length - 1] === str[i]) {
        stackOfBrackets.pop();
      } else {
        stackOfBrackets.push(str[i]);
      }
    } else if (rightBrackets.includes(str[i])) {
      index = rightBrackets.indexOf(str[i]);
      if (leftBrackets[index] === stackOfBrackets[stackOfBrackets.length - 1]) {
        stackOfBrackets.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return stackOfBrackets.length === 0 ? true : false;
}
