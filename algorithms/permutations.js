// recursive tree
const permute = (nums, set = [], answers = []) => {
    if (!nums.length) answers.push([...set]);
    console.log('set', set)
    for (let i = 0; i < nums.length; i++) {
        // filter out the current iteration
        const newNums = nums.filter((_, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        console.log('end permute now pop')
        // before moving on to next index pop off the previous number
        set.pop();
    }

    return answers;
}

permute([1, 2, 3])