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