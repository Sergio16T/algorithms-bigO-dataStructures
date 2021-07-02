// Remove duplicates from an array

const removeDuplicates = (array) => {
    return array.reduce((startValue, element) => startValue.includes(element) ? startValue : [...startValue, element], []);
}

const removeDuplicatesWithSet = (array) => {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 1, 1, 2, 3]));
console.log(removeDuplicatesWithSet([1, 2, 1, 1, 2, 3]));
