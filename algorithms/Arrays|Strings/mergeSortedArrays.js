/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
Time complexity: O((n+m)log⁡(n+m))

The cost of sorting a list of length xxx using a built-in sorting algorithm is O(xlog⁡x)
. Because in this case, we're sorting a list of length m+nm + nm+n, we get a total time complexity of O((n+m)log⁡(n+m))

Space complexity: O(n), but it can vary.
Most programming languages have a built-in sorting algorithm that uses O(n)\mathcal{O}(n)O(n) spac
*/
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1 = nums1.sort((a, b) => a - b);
};



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
3 POINTERS WHILE LOOP
*/
var _merge = function(nums1, m, nums2, n) {
    if (!nums2.length) { return nums1.splice(m, m - n); }
    // 3 pointers
    // make a copy of nums1 then increment pointers as we update nums1.
    // sort nums comparing values from nums1 to nums2 and overwriting nums1.
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0; // pointer for nums1 reader
    let p2 = 0 // pointer for nums2 reader
    // we need a pointer for WRITING
    let writer = 0;



    while (p1 < m || p2 < n) {
    // IF nums1Copy[p1] <= nums2[p2] THEN nums1[writer] = nums1Copy[p1]
        if (nums1Copy[p1] <= nums2[p2] || p2 >= n) { // p2 >= n covers the edge case where we have p2 outside of boundary
            nums1[writer] = nums1Copy[p1];
            // INCREMENT p1++
            p1++;
        } else {
            // ELSE IF nums2[p2] < nums1Copy[p1] THEN nums1[writer] = nums2[p2]
            nums1[writer] = nums2[p2];
            p2++;
        }
        // INCREMENT writer++
        writer++;
    }
};

/*
3 Pointers solution with for loop
TIME complexity: O(n+m)
SPACE complexity: O(m)
We are allocating an additional array of length m
*/
var _mergeA = function(nums1, m, nums2, n) {
    // Make a copy of the first m elements of nums1.
    let nums1Copy = new Array[m];
    for (let i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }

    // Read pointers for nums1Copy and nums2 respectively.
    let p1 = 0;
    let p2 = 0;

    // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for (let p = 0; p < m + n; p++) {
        // We also need to ensure that p1 and p2 aren't over the boundaries
        // of their respective arrays.
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[p] = nums1Copy[p1++];
        } else {
            nums1[p] = nums2[p2++];
        }
    }
}


