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

// O(n) linear time complexity
// Sliding Window Method
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        let ch = s[right];
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

