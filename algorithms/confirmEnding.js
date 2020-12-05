// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    let startIndex = str.length - target.length;
    return str.substring(startIndex) === target;
    // substring(startIndex, endIndex) returns the substring beginning at startIndex inclusive, but not including endIndex (exclusive)

}

confirmEnding("Bastian", "on");