/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    s=s.split("")
    return s.slice(0,k).reverse().concat(s.slice(k)).join('')
};