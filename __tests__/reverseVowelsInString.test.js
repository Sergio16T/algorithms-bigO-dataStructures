const reverseVowels = require("../algorithms/reverseVowelsInString"); 

describe('it reverses vowels in string', ()=> {
    it('It reverses hello to holle', ()=> {
        const string = 'hello'; 
        expect(reverseVowels(string)).toEqual('holle'); 
    }); 
    it('it reverses aA to Aa', ()=> {
        const string = 'aA'; 
        expect(reverseVowels(string)).toBe('Aa'); 
    })
});