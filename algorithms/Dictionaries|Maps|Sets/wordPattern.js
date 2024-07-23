/**
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Time O(n)
 * Space O(n)
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  // first we split the string into words assuming words are always separated by a space
  const words = s.split(" ");
  if (words.length !== pattern.length) {
    return false;
  }
  // I must give each word a corresponding key
  const map = new Map();
  const keys = [...new Set(pattern)];
  let result = "";
  // iterate through words and assign a corresponding key to each word.
  for (const word of words) {
    if (map.has(word)) {
      continue;
    }
    if (!keys.length) {
      return false;
    }
    map.set(word, keys.shift());
  }

  for (const word of words) {
    result += map.get(word);
  }

  return result === pattern;
};




/**
 * Solution 2
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var _wordPattern = function(pattern, s) {
  // first we split the string into words assuming words are always separated by a space
  const words = s.split(" ");
  // I must give each word a corresponding key
  const mappedWords = new Map();
  const mappedChars = new Map();
  if (words.length !== pattern.length) {
    return false;
  }
  // iterate through words and assign a corresponding key to each word.
  // while checking to make sure we have not already mapped
  // one pass is fine since pattern and words is same length
  for (let i = 0; i < pattern.length; i++) {
    const w = words[i];
    const p = pattern[i];

    // if the char in pattern has not been mapped let's map it
    if (!mappedChars.has(p)) {
      // if the word has already been mapped to some other key return false
      if (mappedWords.has(w)) {
        return false;
      } else {
        mappedWords.set(w, p);
        mappedChars.set(p, w);
      }
    } else {
      // let's make sure the current word is equal to the mapping
      const keyWordMapping = mappedChars.get(p); // will return corresponding word;
      if (keyWordMapping !== w) {
        // this isn't a match!
        return false;
      }
    }
  }
  // we made it through the keyword mapping checks it's a match!
  return true;
};
