// Determine if a string is an anagram of another string

/* Sample inputs
* Mary Army // true
* Listen, Silent // true
*/

// 1) determine if strengths are same length. If not return false
// 2) check the first letter of the first string and see if the second string contains that letter
// 3) if it does remove the letter from the second string and continue to next letter in the first word
// 4) If at any point it does not contain the letter then return false

// Using regex to search and find.
const isAnagram1 = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let letter = s1[i];
        let regEx = new RegExp(letter, 'i');
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
        let letter = s1[i].toLowerCase();
        let indexFound= s2.indexOf(letter);
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

// First Solution
const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let letter = s1[i].toLowerCase();
        if (s2.toLowerCase().includes(letter)) {
            let regEx = new RegExp(letter, 'i');
            s2 = s2.replace(regEx, '');
        } else {
            break;
        }
    }

    return s2.length === 0;

}

console.log(isAnagram("Listen", "Silent"));
console.log(isAnagram("Listen", "Apple"));