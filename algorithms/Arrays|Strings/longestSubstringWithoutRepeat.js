// Given a string, find the length of the longest substring without repeating characters.
// Input: "abcabcbb" Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: "bbbbb" Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: "pwwkew" Output: 3
// Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/*
Example with Pseudocode: abcbbcad

Iterate through string checking at each position if we have unique characters in substring.
As we move through the string we are keeping track of 3 values
- position in string
- substring with unique characters we can use a * Set *
- max value for `longest substring length`

Once we hit a duplicate character that is contained in the set
we need to remove characters from the left side of set until the current charater in iteration is unique within set again
this works because we need substring to be unique and the max value will not be affected as the set is getting smaller until the set no longer contains current char
when the set does not contain character, we can proceed with adding to set calculating max length by comparing to current max at each iteration

 1) right pointer moves over and add char to a set if unique. Assign max value until we hit duplicate, in this case b: right = 3 and max = 3;
 2) to remove duplicates contract the string by removing from the beginning and moving our left pointer over
    until we have a unique set again.
    Note: removing from left until we have unique set works because we're checking at each index of string if that
          is the longest set
 3) now that set is unique again we continue forward with our right pointer and repeat the process until our right pointer
  is at the end of the list
 4) then we return the max which we've been assigning a value as we add to our set

*/



/**
 * @param {string} s
 * @return {number}
*/
/*
 longest continious substring without repeating characters
 * use a set to store values that are unique
 * sliding window if the set contains the character increase the left position of
 * the window until it is unique
 * if we have a unique character determine the max by comparing against current max.

 TIME: O(n)
 SPACE: O(n) where n is the number of elements stored in set which could be the length of s.
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let left = 0,
    right= 0,
    maxWindow = 0;

  while (right < s.length) {
    // "abcabcbb"
    const char = s[right]; // right pointer iterates
    if (set.has(char)) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(char);
      right++;
      maxWindow = Math.max(set.size, maxWindow);
    }
  }
  return maxWindow;

}

// TIME: O(n) linear time complexity
// SPACE O(n) where n is the size of set containing at most s.length values.
// Sliding Window Method
var _lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < s.length) {
    const ch = s[right];
    if (!set.has(ch)) {
      set.add(ch);
      max = Math.max(max, set.size);
      right++;
    } else {
      set.delete(s[left]); // could also write set.delete(s.charAt(left));
      left++;
    }
  }
  // console.log(set)
  return max;

}



var lengthOfLongestSubstring2 = function(s) {
  // Sliding Window Problem??
  // e.g. create a window beginning at first item and expand it's size
  // until we reach a duplicate.
  // as we increase the window we increment a counter for longest substring without repeat
  // then we move the window over 1 character and see if it's a set. If it's not we
  // contract the window 1 again until it's a unique set.
  // always checking if window is larger than longest substring counter
  const set = new Set();
  let left = 0, // left keeps track of left side of window
    right = 0, // right is the current number as we move window right
    max = 0; // max keeps track of largest unique set.
  while (right < s.length) {
    const ch = s[right];
    if (set.has(ch)) {
      // we move left over 1
      // delete the left most from set
      set.delete(s[left])
      left++;
    } else {
      set.add(ch);
      max = Math.max(max, set.size)
      right++;
      // increment counter
      // move right over
    }
  }
  return max;

};