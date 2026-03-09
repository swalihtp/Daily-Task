/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        const temp = word.split("").reverse().join("")
        if (word == temp) {
            return word
        }
    } return ""
};