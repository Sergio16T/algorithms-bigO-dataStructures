const plusOne =  require('../algorithms/Arrays|Strings/plusOne');

describe('it tests plusOne solution', () => {
    it('adds 1 to end of array when last digit less than 9', () => {
        let input = [1,2,3];
        expect(plusOne(input)).toEqual([1,2,4]);
    });
    it('carries the one with edge case [9, 9]', () => {
        let input = [9, 9];
        expect(plusOne(input)).toEqual([1, 0, 0]);
    });
});