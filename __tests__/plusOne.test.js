const plusOne =  require('../algorithms/plusOne'); 

describe('it tests plusOne solution', () => {
    it('adds 1 to end of array when last digit less than 9', () => {
        let input = [1,2,3]; 
        expect(plusOne(input)).toEqual([1,2,4]);
    })
});