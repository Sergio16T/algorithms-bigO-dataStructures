// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number

function getIndexToInsert(arr, num) {
    if (!arr.length) { return 0; }

    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (num <= n) {
            return i;
        }
    }
    return arr.length;
}

const result = getIndexToInsert([5, 3, 20, 3], 5);
console.log(result);