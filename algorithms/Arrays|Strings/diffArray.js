/*
Compare two arrays and return a new array with any items found in only one of the two given arrays, but not both.

Note
You can return the array with its elements in any order.
*/

// only want items in found in one of the two arrays but not both therefore test if either array does not include the item
// if this condition passes then keep the item
function diffArray(arr1, arr2) {
  const list = arr1.concat(arr2); // or let list = [...arr1, ...arr2];
  return list.filter(item => !arr1.includes(item) || !arr2.includes(item));

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // returns [4]