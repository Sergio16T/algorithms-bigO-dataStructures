// Remove duplicates from an array

const removeDuplicates = (array) => {
    return array.reduce((previousValue, element) => previousValue.includes(element) ? previousValue : [...previousValue, element], []);
}

const removeDuplicatesWithSet = (array) => {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 1, 1, 2, 3]));
console.log(removeDuplicatesWithSet([1, 2, 1, 1, 2, 3]));




/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * @param {number[]} nums
 * @return {number}
 */
/*
Time Complexity: O(N), since we only have 2 pointers, and both the pointers will traverse the array at most once.

Space Complexity: O(1, since we are not using any extra space.
*/
var _removeDuplicates = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++) {
        // We skip to next index if we see a duplicate element
        if(nums[i - 1] != nums[i]) {
            /* comparing against previous value */

            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    return insertIndex;
};

removeDuplicates([4, 4, 4, 6]); // [4, 6, 4, 6] return insertIndex 2 which is the length of sub-array containing unique items.