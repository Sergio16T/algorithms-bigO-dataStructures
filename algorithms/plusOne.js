
//example [4, 1, 9]
// 1st make last digit 0 [4, 1, 0] then carry the one [4, 2, 0]; 

// edge case [9, 9] 
// 1st make last digit 0 then [9, 0] carry the 1 [0, 0] in this case the for loop ends but we still 
// need to carry the one to make it [1, 0, 0] therefor we add 1 to beginning of array by using digits.unshift(1)

// Time complexity
// Linear  O(n)

const plusOne = (digits) => {
    for(let i=digits.length-1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i] = digits[i] + 1; 
            return digits; 
        } else {
            digits[i] = 0; 
        }
    }
    digits.unshift(1); 
    return digits; 

}

module.exports = plusOne; 