// Write a function that takes a string as input and reverse only the vowels of a string.

// time complexity analysis
// Linear O(n) + O(n) + O(n) = 3*O(n) = O(n)
// O(n)

const reverseVowels = function(s) {
    s = s.split("");
    let map = {
        'a': 'a',
        'A' : 'A',
        'e': 'e',
        "E" : "E",
        "i": "i",
        "I" : "I",
        "o":"o",
        "O": "O",
        "u":"u",
        "U": "U"
    };
    let indices = [];
    let vowels = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (map[ch]) {
            indices.push(i);
            vowels.push(ch);
        }
    }
    vowels = reverseArray(vowels);
    for (let j = 0; j < vowels.length; j++) {
       let index = indices[j];
       s[index] = vowels[j];
    }
    return s.join("");
};

function reverseArray(array) {
       for (let i = 0; i < Math.floor(array.length/2); i++) {
        let temp= array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

module.exports = reverseVowels;