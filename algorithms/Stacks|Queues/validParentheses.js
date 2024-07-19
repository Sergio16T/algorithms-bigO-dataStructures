// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// example inputs
// input: "()"
// output: true
// input: "()[]{}" output: true
// Input: "(]"
// Output: false
// Input: "{[]}"
// Output: true

// Time Complexity
// Linear O(n)

function isValid(s) {
  if (s === "") { return true; }
  const map = {
    "(" : ")",
    "{" : "}",
    "[" : "]",
  };
  const stack = [];
  // with "{[]}" example stack would equal ["}", "]"];
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (map[el]) {
      stack.push(map[el])
    } else if (el !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;

}

exports.isValid = isValid;