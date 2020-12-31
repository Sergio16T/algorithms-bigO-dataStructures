// 1) Set the current minimum index as i in the iteration of the loop
    // this enables us to search for the minimum value from the whole group
    // if the minValues index is not equal to i then swap them
// 2) After first iteration index 0 to the end of array we will we have placed the min value at the front
    // then we go to the next iteration and repeat -- this time only from index 1 to the end of array
// This will lead to sorting the array by selecting the minvalue from a group and setting that minValue at front of that group

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i; j < array.length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            let temp = array[i];
            array[i] = array[indexMin];
            array[indexMin] = temp;
        }
    }
    return array;
}

let array = [0, 6, 5, 1, 3, 2];

console.log(selectionSort(array))