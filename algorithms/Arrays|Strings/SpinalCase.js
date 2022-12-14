/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
See test file for sample input and outputs
*/

function spinalCase(str) {
    let spinalCase = "";
    // Uppercase letter, white space char, & _ are separators
    let upperCase = new RegExp(/^[A-Z]{1}$/);
    let replaceChar = new RegExp(/^[_\s]{1}$/);

    spinalCase += str[0].toLowerCase();

    for (let i = 1; i < str.length; i++) {
        let char = str[i];
        let lastChar = spinalCase[spinalCase.length - 1];

        if (upperCase.test(char)) {
            addDash(lastChar);
            spinalCase += char.toLowerCase();
        } else if (replaceChar.test(char)) {
            addDash(lastChar);
        } else {
            spinalCase += char.toLowerCase();
        }
    }

    function addDash (char) {
        if (char !== "-") {
            spinalCase += "-";
        }
    }

    return spinalCase;
}

module.exports = spinalCase;