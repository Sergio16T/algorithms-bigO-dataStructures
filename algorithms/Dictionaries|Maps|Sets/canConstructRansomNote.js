/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/*
 return true if ransomNote can be constructed by using the letters in magazine
 each letter in magazine can only be used once
    * BRUTE FORCE:
        iterate through random string checking if character in magazine.
        // create a copy of magazine str
        // when found remove character from magazine copy..
        // if we make it through to end of ransom note return true
        // if at any point we don't find the char in magazine return false..
    Unsure of runtime of JS methods includes and replace but potentially nested loops with linear searches and additional memory for replacement string

    * Without JS methods
    Create a map containing magazine characters and count as k/v pairs
    as we iterate through ransomNote -- check if dictionary contains the char key and if the count is > 0..
    as we find matches decrement the count in the count map

    TIME: O(m + r) where m is number of characters in magazine and r is number of characters in ransom note. This can be simplified to O(m).
    SPACE: O(m) where m is the number of characters in magazine if we can be sure that we are limited to 26 characters than this will be max 0(1) constant
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineCharCount = new Map();

  for (const char of magazine) {
    magazineCharCount.set(char, (magazineCharCount.get(char) || 0) + 1);
    // if (magazineCharCount.has(char)) {
    //   magazineCharCount.set(char, magazineCharCount.get(char) + 1);
    // } else {
    //   magazineCharCount.set(char, 1);
    // }
  }

  for (const char of ransomNote) {
    if (magazineCharCount.get(char) > 0) {
      magazineCharCount.set(char, magazineCharCount.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};


// BRUTE FORCE INITIAL SOLUTION
var _canConstruct = function(ransomNote, magazine) {
  let copy = magazine.slice(0);
  for (const char of ransomNote) {
    if (copy.includes(char)) {
      copy = copy.replace(char, "");
    } else {
      return false;
    }
  }

  return true;


};

// BRUTE FORCE LEET CODE SOLUTION
// Time Complexity : O(m⋅n)
// Finding the letter we need in the magazine has a cost of O(m). This is because we need to perform a linear search of the magazine.
// Removing the letter we need from the magazine is also O(m). This is because we need to make a new string to represent it. O(m) + O(m) = O(2⋅m) =O(m) because we drop constants in BIG O.
// So, how many times are we performing this O(m) operation? Well, we are looping through each of the n characters in the ransom note and performing it once for each letter.
// This is a total of n times, and so we get n * O(m) = O(m⋅n)
// SPACE is O(m): Creating a new magazine with one letter less requires auxillary space the length of the magazine; O(m)
var _canConstruct2 = function(ransomNote, magazine) {
  for (const char of ransomNote) {
    const index = magazine.indexOf(char)
    if (index >= 0) { // linear search
      magazine = magazine.substring(0, index) + magazine.substring(index + 1); // linear search and replace
    } else {
      return false;
    }
  }

  return true;


};