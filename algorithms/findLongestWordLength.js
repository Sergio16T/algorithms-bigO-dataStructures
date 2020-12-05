function findLongestWordLength(str) {
    let array =  str.split(" ");
    const longestWord = array.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ? currentValue : accumulator);
    return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
