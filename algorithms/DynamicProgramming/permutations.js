/*
    Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
    Examples:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]
    Input: nums = [1]
    Output: [[1]]
*/
// recursive tree
// O(n!) factorial
// [1, 2, 3] --> 3 * 2 * 1 = 6 answers
// [1, 2, 3, 4] --> 4 * 3 * 2 * 1 = 24 answers
const permute = (nums, set = [], answers = []) => {
  if (!nums.length) {
    answers.push([...set]);
  }
  console.log('set', set)

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((_, index) => index !== i);  // filter out the current iteration
    set.push(nums[i]);
    permute(newNums, set, answers);

    console.log('end permute now pop')
    console.log('answers', answers)
    // before moving on to next index in the tree, pop off the last remaining number to reach our base case and push answer
    set.pop();
  }

  return answers;
}

permute([1, 2, 3])


const _permute = function (nums) {
  const ans = [];
  const backtrack = function (curr) {
    if (curr.length === nums.length) {
      ans.push([...curr]);
      return;
    }
    for (const num of nums) {
      if (!curr.includes(num)) {
        curr.push(num);
        backtrack(curr);
        curr.pop();
      }
    }
  };
  backtrack([]);
  return ans;
};

const __permute = function (nums) {
  const ans = [],
    current = [];
  const backtrack = function (curr) {
    if (curr.length === nums.length) {
      ans.push([...curr]);
      return;
    }
    for (const num of nums) {
      if (!curr.includes(num)) {
        curr.push(num);
        backtrack(curr);
        curr.pop();
      }
    }
  };
  backtrack(current);
  return ans;
};