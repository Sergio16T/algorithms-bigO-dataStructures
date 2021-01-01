// recursive tree
// O(n!) factorial
// [1, 2, 3] --> 3 * 2 * 1 = 6 answers
// [1, 2, 3, 4] --> 4 * 3 * 2 * 1 = 24 answers
const permute = (nums, set = [], answers = []) => {
    if (!nums.length) answers.push([...set]);
    console.log('set', set)
    for (let i = 0; i < nums.length; i++) {
        // filter out the current iteration
        const newNums = nums.filter((_, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        console.log('end permute now pop')
        // before moving on to next index in the tree
        // pop off the last remaining number to reach our base case and push answer
        set.pop();
    }

    return answers;
}

permute([1, 2, 3])