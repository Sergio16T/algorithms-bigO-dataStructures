/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 *
 */

/*
Hash Set Approach

Time Complexity: O(n^2)
 twoSum helper is O(n)
 Sorting the array takes O(n log ⁡n)
 so overall complexity is O(n log ⁡n + n^2)
 This is asymptotically equivalent to O(n^2)

Space Complexity: O(n) for the hashset.
*/
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = []; // [][]
    // iterate through nums. If value at index is greater than 0 stop since 3 sum is searching for values equal to 0;
    // if values are negative or 0 they will have already searched through the remaining numbers in nums in twoSum
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i == 0 || nums[i - 1] != nums[i]) {
            twoSum(nums, i, res);
        }
    }
    return res;

};

/**
 twoSum assumes nums is sorted
 Look for other 2 numbers that match with current value to equal 0

 */
const twoSum = (nums, indexToCompare, res) => {
    const hashset = new Set();

    for (let j = indexToCompare + 1; j < nums.length; j++) {
        // check value at indexToCompare against every other value in nums
        let match = -nums[indexToCompare] - nums[j]; // negative value - current value is the match. So we're looking for a final value to sum to 0;
        if (hashset.has(match)) {
            res.push(new Array(nums[indexToCompare], nums[j], match));
            // Already searched array for matches of current value skip following duplicates if present
            // check for out of bounds first
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                j++;
            }
        }
        hashset.add(nums[j])
    }
}


// TWO POINTERS
function twoSumII(nums,  i, res) {
    let lo = i + 1,
        hi = nums.length - 1;
    while (lo < hi) {
        let sum = nums[i] + nums[lo] + nums[hi];
        if (sum < 0) {
            ++lo;
        } else if (sum > 0) {
            --hi;
        } else {
            res.push(new Array(nums[i], nums[lo++], nums[hi--]));
            while (lo < hi && nums[lo] == nums[lo - 1]) {
                ++lo;
            }
        }
    }
}