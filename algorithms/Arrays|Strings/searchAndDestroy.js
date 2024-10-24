/*
You will be provided with an initial array (the first argument in the destroyer function), followed
by one or more arguments. Remove all elements from the initial array that are of the same value
as these arguments.
*/

function destroyer() {
  let [array, ...rest] = arguments;
  rest.forEach(item => {
    array = array.filter(value => value !== item);
  });
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1, 1]


function _destroyer(arr, ...args) {
  // we can switch current value with last value if equal to one of the items
  // and we can remove last item in array.
  const set = new Set(args); // using set assuming args are unique now we have faster lookup time
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (set.has(current)) { // to improve look up time we can create a map
      arr[i] = arr[arr.length - 1];
      arr[arr.length - 1] = current;
      arr.pop();
      i--;
    }
  }
  return arr;
}