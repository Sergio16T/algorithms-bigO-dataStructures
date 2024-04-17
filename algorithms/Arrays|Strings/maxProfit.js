/**
 * @param {number[]} prices
 * @return {number}
 */
/*
TIME COMPLEXITY: O(N^2)
SPACE COMPLEXITY: O(1)
*/
var maxProfit = function(prices) {
    // iterate through the list checking each value against the rest of values to see best buy/sell
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        let strikePrice = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            let sellPrice = prices[j];
            max = Math.max(max, sellPrice - strikePrice);
        }
    }
    return max;
};



/**
 * @param {number[]} prices
 * @return {number}
 */
/*
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(1)
*/
var _maxProfit = function(prices) {
    // iterate through the list storing the smallest value as you go. Then subtract the current value in iteration minus the min value.
    // If this difference is bigger than the max -- update the max profit value
    let minPrice = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        // as we iterate update the lowest price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if ((prices[i] - minPrice) > max) { // compare lowest price against most recent item.
            max = prices[i] - minPrice;
        }
    }
    return max;
};