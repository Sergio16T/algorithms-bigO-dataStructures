// #1: Basic case.
// text: "aaabcaa", query: 'abc'
// boldChars: [false, false, true, true, true, false, false]
// result: "aa<b>abc</b>aa"

// #2: Multiple matches case.
// text: "aaabcaabc", query: 'abc'
// boldChars: [false, false, true, true, true, false, true, true, true]
// result: "aa<b>abc</b>a<b>abc</b>"

// #2: Consecutive case.
// text: "aababcac", query: 'ab'
// boldChars: [false, true, true, true, true, false, false, false]
// result: "a<b>abab</b>cac"

/**
 * @param {string} text
 * @param {string} query
 * @return {string}
 */

export default function textSearch(text, query) {
  if (text.trim() === '' || query.trim() === '') {
    return text;
  }

  const boldChars = Array.from({ length: text.length }, () => 0);

  for (let i = 0; i < text.length; ) {
    const substr = text.slice(i, i + query.length);
    if (substr.toLowerCase() === query.toLowerCase()) {
      boldChars.fill(1, i, i + query.length);
      // Start from next character if there's a match since one
      // character cannot match the same query more than once.
      i = i + query.length;
    } else {
      i++;
    }
  }

  let highlightedString = '';
  for (let i = 0; i < text.length; i++) {
    // When the current character should be bolded
    // and the previous character should not be bolded,
    // append an opening tag to the final string.
    const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i - 1] !== 1;
    // When the current character should be bolded
    // and the next character should not be bolded,
    // append a closing tag to the final string.
    const shouldAddClosingTag = boldChars[i] === 1 && boldChars[i + 1] !== 1;
    let char = text[i];

    if (shouldAddOpeningTag) {
      char = '<b>' + char;
    }

    if (shouldAddClosingTag) {
      char = char + '</b>';
    }
    highlightedString += char;
  }

  return highlightedString;
}
