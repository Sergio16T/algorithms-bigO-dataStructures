/* write function that takes input (substring, string) and
return the number of times the substring repeats within the string */

// tap tapwatertap
// string length = 11
// 8th index = t
// 8 + 3 == 11
// iterate through to the 8th index including the 8th index
// comparing the substring with the start index being i in the iteration and
// the end index being i + substring.length

const countSubstring = (substring, s) => {
    let count = 0;
    let length = s.length - substring.length;
    for(let i = 0; i <= length; i++) {
        let subS = s.substring(i, i + substring.length);
        if(subS === substring) {
            count++;
        }
    }
    return count;
}

console.log(countSubstring("tap", "tapwatertap"));
console.log(countSubstring("so", "please clean with soap"));