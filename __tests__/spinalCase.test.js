const spinalCase = require('../algorithms/Arrays|Strings/SpinalCase');


describe('SpinalCase', () => {
  it('should convert Capitalized Sentence with white space character between to spinal case', () => {
    expect(spinalCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
  });
  it('should convert camelCase', () => {
    expect(spinalCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
  });
  it('should convert capitalized snake_case ', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toEqual('the-andy-griffith-show');
  });
  it('should convert convert a mix of capitalized, lowercase and dasherized words', () => {
    expect(spinalCase('Teletubbies say Eh-oh')).toEqual('teletubbies-say-eh-oh');
  });
  it('should convert mix with a space followed by upperCase', () => {
    expect(spinalCase('AllThe-small Things')).toEqual('all-the-small-things');
  });

});