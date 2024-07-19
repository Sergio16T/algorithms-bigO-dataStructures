// Given a string s, return the longest palindromic substring in s.
/*
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"

Input: s = "a"
Output: "a"

Input: s = "ac"
Output: "a"
*/


// Solution
// I could do two nested loops with O(n ^ 2) quadratic time
// 1) Start at end of string with the full string and check if palindrome if so return it
// 2) If not make it smaller and keep checking

const longestPalindrome2 = function(s) {
  // start at s.length and exclude when using substring method (inclusive, exclusive)
  for (let i = s.length; i > 0; i--) {
    let left = 0, right = i;

    while (right <= s.length) {
      const substr = s.substring(left, right);

      if (isPalindrome2(substr)) {
        return substr;
      } else {
        left++;
        right++;
      }
    }

  }
  return "";
}

const isPalindrome2 = function(s) {
  let left = 0, right = s.length-1;
  while (left < right) {
    // check if each end of string is equal to each other and move your way toward center
    if (s[left] !== s[right]) {
      return false;
    }
    else {
      left++, right--;
    }
  }
  return true;
}

/*
Solution 1 First Attempt -- Con -- will time out -- will take a long time to go through the entire string with large inputs
1) start at left and move to right and check if palindrome at each index of string
2) as you are moving to the right if a palindrome is found check if the palindrome is longer length
then the current longest if it is longer -- assign the longest string to that palindrome
3) continue to end of string
4) move left pointer over 1 and repeat the process
*/
const longestPalindrome = function(s) {
  let longest = "";
  let left = 0;
  let right = 0;
  while (left < s.length) {
    if (right === s.length) {
      left += 1;
      right = left;
    }
    const subString = s.substring(left, right + 1);
    if (isPalindrome(subString)) {
      console.log('Y', subString);
      const max = longest.length > subString.length ? longest : subString;
      longest = max;
    } else {
      console.log('N', subString)
    }
    right+=1;
  }

  return longest;
};

const isPalindrome = (s) => {
  return s.split('').reverse().join('') === s;
}
const result = longestPalindrome("asasabd");
console.log('result', result);
// console.log(isPalindrome("sas"))
