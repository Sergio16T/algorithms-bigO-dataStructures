const { isValid } = require("../algorithms/validParentheses"); 

describe('Test validParentheses solution', () => {
    it("evaluates to true when input is '[]'", ()=> {
        const string = "[]"; 
        expect(isValid(string)).toBe(true);
    });
    it('evaluates to true when input = "[{()}]"', () => {
        const string = "[{()}]"; 
        expect(isValid(string)).toBe(true); 
    });
    it("evaluates to true when input is '()[]{}' ", () => {
        const string = "()[]{}"; 
        expect(isValid(string)).toBe(true);
    });
    it("evaulates to false when input is '(]' ", () => {
        const string = "(]"; 
        expect(isValid(string)).toBe(false);
    });
});