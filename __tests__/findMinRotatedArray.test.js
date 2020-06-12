const { findMin } =  require('../algorithms/findMinInRotatedArray'); 

describe('it tests findMin solution', () => {
    it('returns 1', () => {
        const rotatedArray = [4, 5, 6, 7, 1, 2 ,3]; 
        expect(findMin(rotatedArray)).toEqual(1);
    })
})