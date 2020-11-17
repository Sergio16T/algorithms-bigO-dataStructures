function reverseString(string) {
    string = string.split(''); 
    for(let i = 0; i < Math.floor(string.length/2); i++) {
        let temp = string[i]; 
        string[i] = string[string.length - 1 - i]; 
        string[string.length - 1 - i] = temp; 
    }
    return string.join(''); 
}