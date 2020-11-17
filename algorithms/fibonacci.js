// Fibonacci Algorithm recursive solution with memoization O(n)
// Time complexity: the number of "operations" will be the number of numbers generated.
// Which means the function runtime grows in relation to the amount of numbers you're trying to generate.
// O(n) where n is the number of numbers generated.
const memoFib = function() {
    let memo = {}
    return function fib(n) {
      if (n in memo) return memo[n];
      else if (n <= 1) memo[n] = n;
      else memo[n] = fib(n - 1) + fib(n - 2);
      return memo[n]
    }
}
//memoFib()(6) // returns 8

// The outer function, memoFib, contains a “memo” object, which will serve as our cache. A map of key/value pairs.
// We then return a function, which has a closure over the “memo” object, and can thus can log the results of its function calls into the “memo.”
// If the “memo” object contains a key for the value (n) for which we’re calculating fibonacci, we simply return memo[n]
// If the “memo” object does not contain a key for n, we calculate the fibonacci number for n and save it in the “memo” object as a key-value pair.
// In both cases, we return memo[n], which is the nth number of the fibonacci sequence.

// Recursive Fibonacci without Memoization
//  O(2^n) or exponential note: O(2^n) denotes an algorithm whose growth doubles with each addition to the input data set.
function recursiveFibo(n) {
    if (n < 2) return n;
    return recursiveFibo(n-1) + recursiveFibo(n-2);
}

// Fibonacci Linear O(n) time complexity solutions
// 1)
function fibo(n) {
    if (n < 2) return n;
    let array = [0, 1];

    for(let i = 2; i <= n; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array[n];
}

// 2)
function fibIterative(n) {
    var a = 1;
    var b = 0;
    var temp;
    while (n > 1) {
        temp = a;
        a = b + a;
        b = temp;
        n--;
    }
    return a;
}