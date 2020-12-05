function findLongestWordLength(str) {
    let array =  str.split(" ");
    const longestWord = array.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ? currentValue : accumulator);
    return longestWord.length;
}

  const result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

  console.log(result);