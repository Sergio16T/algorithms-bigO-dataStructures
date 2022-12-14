// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
/*
s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

var firstUniqChar = function(s) {
    const map = {
        // ch: index
    }
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch in map) {
            map[ch] = -1;
        } else {
            map[ch] = i;
        }
    }
    let indices = Object.values(map);
    let result = indices.filter(index => index !== -1);
    return result.length ? result[0] : -1;

}
