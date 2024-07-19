// Determine if a string is an anagram of another string

/* Sample inputs
* Mary Army // true
* Listen, Silent // true
*/

// 1) determine if strengths are same length. If not return false
// 2) check the first letter of the first string and see if the second string contains that letter
// 3) if it does remove the letter from the second string and continue to next letter in the first word
// 4) If at any point it does not contain the letter then return false

// First Solution
const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) { return false; }

  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (s2.includes(letter)) {
      const regEx = new RegExp(letter, 'i');
      s2 = s2.replace(regEx, '');
    } else {
      break;
    }
  }

  return s2.length === 0;

}

console.log(isAnagram("Listen", "Silent"));
console.log(isAnagram("Listen", "Apple"));



/*
Approach 1 SORTING

Time complexity: O(nlog⁡n)
Assume that n is the length of s,
sorting costs O(nlog⁡n) and comparing two strings costs O(n).
Sorting time dominates and the overall time complexity is O(nlog⁡n)
*/

function isValidAnagram(s,  t) {
  if (s.length != t.length) {
    return false;
  }
  const str1 = s.split('');
  const str2 = t.split('');

  str1.sort();
  str2.sort();

  return str1.join('') === str2.join('');
}



var isAnagram3 = function(s, t) {
  // 1) If strings are not the same length return false
  if (s.length !== t.length) { return false; }
  // 2) Iterate through 1st string 's' and check if char at index in iteration is in 2nd string 't'
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (t.includes(char)) {
      // 3) If 2nd string does contain the char remove the character from the 2nd string 't'
      t = t.replace(char, '');
    } else {
      break; //  if 2nd string does not contain the char break out of the loop
    }
  }

  // 5) if after the loop the 2nd string length is 0 then it is an Anagram
  return t.length === 0;

};



// Using regex to search and find.
const isAnagram1 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    const regEx = new RegExp(letter, 'i');
    if (s2.search(regEx) >= 0) {
      s2 = s2.replace(regEx, '');
    } else {
      break;
    }
  }

  return s2.length === 0;

}

console.log(isAnagram1("Listen", "Silent"));
console.log(isAnagram1("Listen", "Apple"));

// Without regex
const isAnagram2 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  s2 = s2.toLowerCase();

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i].toLowerCase();
    const indexFound= s2.indexOf(letter);
    if (indexFound >= 0) {
      s2 = s2.slice(0, indexFound) + s2.slice(indexFound + 1);
    } else {
      break;
    }
  }

  return s2.length === 0;
}

console.log(isAnagram2("Listen", "Silent"));
console.log(isAnagram2("Listen", "Apple"));