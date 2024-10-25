/**
 * Given a binary array data, return the minimum number of swaps required to group all 1’s present in the array together in any place in the array.
 * @param {number[]} data
 * @return {number}
 * INPUT IS 1's and 0's only
 */
var minSwaps = function(data) {
  // get the total number of 1's in the provided input array
  // we can determine the min number of swaps by substracting
  // [total number of 1's in the input array] - [max number of 1's in window with size of number of 1's]
  const window_size = data.reduce((acc, current) => acc + current, 0);
  let window_start = 0;
  let window_end = 0;

  let max_ones_in_w = 0; // track max number of one's
  let current_ones_in_w = 0;

  while (window_end < data.length) {
    current_ones_in_w += data[window_end++];
    if (window_end - window_start > window_size) {
      current_ones_in_w -= data[window_start++];
    }

    max_ones_in_w = Math.max(max_ones_in_w, current_ones_in_w);
  }
  return window_size - max_ones_in_w;
};

/**
 * @param {number[]} data
 * @return {number}
 * INPUT IS 1's and 0's only
 */
var minSwapsWithForLoop = function(data) {
  // get the total number of 1's in the provided input array
  // we can determine the min number of swaps by substracting
  // [total number of 1's in the input array] - [max number of 1's in window with size of number of 1's]
  const window_size = data.reduce((acc, current) => acc + current, 0);
  let window_start = 0;
  let max_ones_in_w = 0; // track max number of one's
  let current_ones_in_w = 0;

  for (let window_end = 0; window_end < data.length; window_end++) {
    current_ones_in_w += data[window_end];
    if (window_end - window_start + 1 > window_size) {
      current_ones_in_w -= data[window_start];
      window_start++;
    }
    max_ones_in_w = Math.max(max_ones_in_w, current_ones_in_w);
  }
  return window_size - max_ones_in_w;
};