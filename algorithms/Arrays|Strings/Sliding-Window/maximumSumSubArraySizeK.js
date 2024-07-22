/**
 *  Given an array of integers of size ‘n’. Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
 * This solution uses a fixed size sliding window algorithm. With a run time of O(n) and a space complexity of O(1) constant
 *
 * @param {*} arr
 * @param {*} k
 * @returns
 */
const maximumSumSubArray = (arr, k) =>  {
  //length of array must be greater than k
  if (arr.length < k) {
    console.log("Invalid")
    return -1;
  }

  // Compute sum of first window of size k
  let max_sum = 0;
  for (let i = 0; i < k; i++) {
    max_sum += arr[i];
  }
  // Compute sums of remaining windows by removing first element of previous window and adding last element of current window.
  let window_sum = max_sum;
  for (let j = k; j < arr.length; j++) {
    // arr[j] last element of current window
    // arr[j - k] first element of previous window
    window_sum += arr[j] - arr[j - k];
    max_sum = Math.max(max_sum, window_sum);
  }

  return max_sum;
}

const array = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
const num = 4;
const result = maximumSumSubArray(array, num);
console.log(result); // 24