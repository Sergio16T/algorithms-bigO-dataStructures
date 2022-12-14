// implement Array.flat()
// it accepts an input array that may contain nested arrays of unknown depth as elements and return a new array that is a flattened version of the input
/*
Example I/O
Input: [1,[2,[3],4],[5]]
Output: [1,2,3,4,5]

Input: [[[3]]]
Output: [3]

Input: [4, [[], 1, [[2]], 3], 5]
Output: [4, 1, 2, 3, 5]

*/

/*
1) Validate with interviewer the input
    -- can we assume we will always receive an array as input or is it possible to receive invalid/null inputs?
    -- can we assume that the values are always integers? may not affect our solution but good to know

2) Write out some sample inputs and outputs
3) Solve them by walking through the problem verbally talking outloud
  -- Check for basecases (if null or if empty array) return [];
  -- Initialize a newArray that will store all of the values
  -- then iterate through the array and check if of type Array or not -- if not push to newArray otherwise handle the subArray with iteration and checking if of type Array or not
  -- In this case this is a great candidate for recursion if of type of array recursively call itself to iterate through the values in array
    -- checking if array or not if not push the value to a newArray that will store all of the values
4) Write down pseudocode

5) Discuss with interviewer this is my initial solution would you like me to begin coding now?

*/

/* O(n) time since each element is only iterated once */
const flatten = (array) => {
    if (!array || array.length === 0) { return []; }

    let newArray = [];
    flattenArray(newArray, array);

    return newArray;
}

const flattenArray = (newArray, array) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element)) {
            flattenArray(newArray, element);
        } else {
            newArray.push(element);
        }
    }
}


console.log(flatten([]));
console.log(flatten([1, [2, [3], 4], [5]]));


// Interesting Solution Different Approach
function _flattenArray(items) {
    const flat = [];

    // do not call the whole function recursively
    // ... that's this mule function's job
    function inner(input) {
        if (Array.isArray(input)) {
            input.forEach(inner);
        } else {
            flat.push(input);
        }
    }

    // call on the "root" array
    inner(items);

    return flat;
}

console.log(_flattenArray([1, [2, [3], 4], [5]]));