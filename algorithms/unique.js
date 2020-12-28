// write an algorithm that returns the unique characters in an array

// O(2n) which is O(n)
const returnUniqueCharacters = (array) => {
// 1) we can create a object with key value pairs keys being the ch in array then assigning the count to the key
// 2) we can iterate through the array
// 3) as we iterate we can check if the map contains the ch
//  - if it does contain it increase the value by 1
// - if it doesn't then then add it with value of 1
// 4) iterate through the keys in the map and if the value is 1 then push it to an array which will store the unique characters
// 5) return that array
    let unique = [];
    const map = {
        // ch: count
    };
    for (let i = 0; i < array.length; i++) {
        let ch = array[i];
        if (ch in map) {
            map[ch] += 1;
        } else {
            map[ch] = 1;
        }
    }

    for (let key in map) {
        if(map[key] === 1) {
            unique.push(key);
        }
    }
    return unique;
}


console.log(returnUniqueCharacters(["a", "a", "b", "c", "b", "d"]));