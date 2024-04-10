/**
 * @param {string} s
 * @return {number}
 */
/*

TIME COMPLEXITY: O(N)Thinking of Input as string. However since a roman has an upper limit of 3999 character length this is a constant. O(1);
SPACE COMPLEXITY: O(1)
*/
var romanToInt = function(s) {
/*
    RULES:
    Generally Roman numerals are usually written largest to smallest from left to right.
    HOWEVER THERE ARE THE FOLLOWING EXCEPTIONS
        I can be placed before V (5) and X (10) to make 4 and 9.
        X can be placed before L (50) and C (100) to make 40 and 90.
        C can be placed before D (500) and M (1000) to make 400 and 900.

    Use the biggest symbols you can to represent a number

    WHEN A SMALLER NUMBER IS BEFORE A LARGER NUMBER THEN WE SUBTRACT OTHERWISE WE ADD

    */
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let number = 0;
    // Iterate through string checking
    for (let i = 0 ; i < s.length; i++) {
        let char = s[i];
        let nextChar = s[i + 1]; // check if next variable is larger if so then number is negative.
        if (dict[char] < dict[nextChar]) {
            number += -dict[char]
        } else {
            number += dict[char];
        }
    }
    return number;
};