/* Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }

    return newArr;
}