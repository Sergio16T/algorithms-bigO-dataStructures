/* Given an array of strings words and two different strings that already exist in the array word1 and word2,
return the shortest distance between these two words in the list. */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*

Q: word found exactly 1x? or each word has potential for more instances?
A: There can be multiple instances of each word
*/

/*
Time complexity: O(N⋅M) where N is the number of words in the input list, and M is the total length of two input words.

Space complexity: O(1), since no additional space is allocated.
*/

var shortestDistance = function(words, word1, word2) {
    let i1 = -1, i2 = -1, minDistance = words.length;
    // iterate throug words checking each value to see if it is equal to word1 or word2.
    // store the indexes of the most recently discovered instance of each word
    // check to see if both indexes are not equal to -1 and then do a comparison to find shortest distance.
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word === word1) {
            i1 = i;
        } else if (word === word2) {
            i2 = i
        }

        if (i1 !== -1 && i2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(i1 - i2));
        }
    }
    return minDistance;
};