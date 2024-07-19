/*
Sum All Numbers in a Range

Input is an array of two numbers. Return the sum of those two numbers plus the sum of all the
numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

// O(n) time complexity

function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = max + min;
  let n = max - 1;
  while (n > min) {
    sum += n;
    n--;
  }
  return sum;
}

const result = sumAll([1, 4]); // returns 10
console.log(result);


function sumAll2(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = max + min;

  for (let i = min + 1; i < max; i++) {
    sum += i;
  }
  return sum;
}