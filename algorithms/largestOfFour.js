function largestOfFour(arr) {
    return arr.map(subArray => {
        return subArray.reduce((acc, currentValue) => acc > currentValue ? acc : currentValue);
    });
}
// map over the values in the array
// within each iteration of the map function I can reduce the array to the largestNumber
let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);
