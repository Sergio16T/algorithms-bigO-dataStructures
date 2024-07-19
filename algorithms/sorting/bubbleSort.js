// Sort the elements in an array. One way to do this is using bubble sort as follows:
// O(n^2) quadratic time


function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}


const array = [0, 6, 5, 1, 3, 2, 4];

console.log(bubbleSort(array));