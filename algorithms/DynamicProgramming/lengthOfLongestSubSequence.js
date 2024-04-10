/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /* dp[i] represents the length of longest increasing subsequence that ends with the ith element
        * let's say we know dp[0] dp[1] and dp[2]
        * since dp[2] represents the length of the longest increasing subsequence that ends with nums[2],
        if nums[3] > nums[2], then we can simply take the subsequence ending at i = 2
        and increase the value by 1. Since nums[3] has yet to be calculated it has the initial value of 1.
    */
    let dp = new Array(nums.length);
    dp.fill(1);

    for (let i = 1; i < nums.length; i ++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);

};