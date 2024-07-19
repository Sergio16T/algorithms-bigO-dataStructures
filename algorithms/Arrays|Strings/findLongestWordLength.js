function findLongestWordLength(str) {
  const array =  str.split(" ");
  const longestWord = array.reduce((startValue, element) => element.length > startValue.length ? element : startValue);
  return longestWord.length;
}

const result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);