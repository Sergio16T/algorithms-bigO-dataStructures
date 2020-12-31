// Divide and conquer

const recursiveMergeSort = (array) => {
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return merge(recursiveMergeSort(left), recursiveMergeSort(right))
}

const merge = (left, right) => {
    let result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
    }
    while (il < left.length){
        result.push(left[il]);
        il++;
    }

    while (ir < right.length){
        result.push(right[ir]);
        ir++;
    }

    return result;
}


let array = [0, 6, 5, 1, 3, 2];

console.log(recursiveMergeSort(array))