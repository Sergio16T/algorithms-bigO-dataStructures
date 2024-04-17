/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x == reverse(x.toString());
};


function reverse(str) {
    // 12345
    // 52341
    // 54321 DONE
    // only need to iterate to the middle of array.
    str = str.split('');
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        // Iterate through the numbers and switch char at index with end of string offset with index
        let temp = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = temp;
    }
    return str.join('');
}