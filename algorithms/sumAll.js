/*

Input is an array of two numbers. Return the sum of those two numbers plus the sum of all the
numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = max + min;
    let n = max;
    while (n > min + 1) {
      console.log(n);
      sum += n - 1;
      n--;
    }
    return sum;
  }

  sumAll([1, 4]);