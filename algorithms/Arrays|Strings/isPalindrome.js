/**
 * @param {string} s
 * @return {boolean}
 */

/*
BRUTE FORCE
Create A copy of string
USE REGEX replace string to remove all no alpha-numeric
then overwrite string with lowercase

ONE PASS: Use two pointers to compare strings from left to right until left is equal to right.
*/
// TIME:  O(n) Space: O(1)
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;


    // move pointers from left to right ignoring invalid characters
    while (left < right) {
        if (!isValidChar(s[left])) {
            left++;
            continue;
        }
        if (!isValidChar(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};

function isValidChar(char) {
    let regex = /[a-z0-9]/gi,
        isValidChar = regex.test(char);

    return isValidChar;
}


/**
 * @param {string} s
 * @return {boolean}
 */

/*
BRUTE FORCE
Create A copy of string
USE REGEX replace string to remove all no alpha-numeric
then overwrite string with lowercase
*/

/*
TIME:  O(n) we need to iterate several times through the string
 * When we filter out non-alphanumeric characters, and convert the remaining characters to lower-case.
 * When we reverse the string.
 * When we compare the original and the reversed strings.
SPACE: O(n) to store the str copy of n valid characters. we also need O(n) space to for the reversed string
*/

var _isPalindrome = function(s) {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        let regex = /[a-z0-9]/gi,
            char = s[i],
            isValidChar = regex.test(char);

        if (isValidChar) {
            str += char.toLowerCase();
        }
    }

    if (!str.length) {
        return true;
    }
    return str.split("").reverse().join("") === str;
};



