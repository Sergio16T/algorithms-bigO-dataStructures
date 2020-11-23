/*
Write function that takes input values(a sorted array) and n (an integer) and find the index of integer in sorted array;
If the integer is not in the array return -1;
*/
const binarySearch = (values, n) => {
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        let midIndex = Math.floor((left + right)/2);
        if (values[midIndex] === n) return midIndex;

        if (values[midIndex] < n) {
            left = midIndex + 1;
        } else {
            right = midIndex - 1;
        }
    }
    return values[left] === n ? left : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
