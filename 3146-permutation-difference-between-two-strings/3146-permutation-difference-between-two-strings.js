/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let count=0
    for(let i=0;i<s.length;i++){
        const tIndex=t.indexOf(s[i])
        count+=Math.abs(i-tIndex)
    }
    return count
};