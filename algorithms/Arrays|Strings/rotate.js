// Given an array, rotate the array to the right by k steps, where k is non-negative.
const rotate = (nums, k) => {
  while (k--) {
    const temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
  }
  return nums;
};