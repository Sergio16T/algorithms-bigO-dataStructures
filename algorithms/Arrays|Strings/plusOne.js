
//example [4, 1, 9]
// 1st make last digit 0 [4, 1, 0] then carry the one [4, 2, 0];

// edge case [9, 9]
// 1st make last digit 0 then [9, 0] carry the 1 [0, 0] in this case the for loop ends but we still
// need to carry the one to make it [1, 0, 0] therefor we add 1 to beginning of array by using digits.unshift(1)

// Time complexity
// Linear  O(n)

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
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



var plusOneWithPseudo = function(digits) {
  // 1) iterate through array beginning at end of array and increment by 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const number = digits[i]
    if (number < 9) {
      // 2) if number is less than 9 increment and return digits [1, 2, 3] -> [1, 2, 4]
      digits[i] += 1;
      return digits
    } else {
      // 3) otherwise set value at index to 0 & move to next iteration of loop and repeat check. [1, 2, 9] -> [1, 3, 0]
      digits[i] = 0;
    }
  }
  // 4) need to cover edge case of only 1 digit so if the loop completes with returning anything add a 1 to beginning of array
  digits.unshift(1);
  return digits;
};

plusOneWithPseudo([1, 2, 3]);