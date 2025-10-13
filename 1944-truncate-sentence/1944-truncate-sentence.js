/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
        let words=s.split(" ")
        words.splice(k)
        let ans=words.join(" ")
        return ans
};