
// use constructor to instantiate new object which can call methods to return original array and or shuffle array.
// constructor pattern : capitalized function name where you can set several properties with this.
var Solution = function(nums) {
    this.numbers = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 *
 */
Solution.prototype.reset = function() {
    return this.numbers;
};

/**
 * Returns a random shuffling of the array.
 *
 */
Solution.prototype.shuffle = function() {
     return this.numbers.map(x => ({value: x, random: Math.random()}))
    .sort((a, b) => a.random - b.random)
    .map(x => x.value);
};


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */