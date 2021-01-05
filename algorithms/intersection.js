// return a set of unique values found in both arrays

const intersection = (array1, array2) => {
    let set = new Set(array1);
    let array = [...set];
    return array.filter(item => array2.includes(item));
}

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
console.log(intersection(firstArray, secondArray)); // [2, 1]