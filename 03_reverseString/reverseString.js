const reverseString = function(word) {
    // if (typeof(word)!=String) {
    //    return "ERROR"
    //}
    let result = ""
    let letters = []
    for (let i = 0; i<word.length; i++){
        letters[i] = word.substring(i,i+1);
    }
    for (let i = 0; i<word.length; i++){
        result = result + letters[word.length-i-1]; 
    }
    return result;
};

console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
