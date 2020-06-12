// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// time complexity o(n^2)

var longestCommonPrefix = function(strs) {
    if(!strs.length) return ""; 
    for(let i = 0; i<= strs[0].length -1; i++ ) {
        for(let str of strs) {
            if(str[i] !== strs[0][i]) {
                return str.slice(0, i); 
            }
        }
    }
    return strs[0]; 
};