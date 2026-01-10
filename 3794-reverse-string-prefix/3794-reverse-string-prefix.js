/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    s=s.split("")
    const x=s.slice(0,k).reverse()
    return x.concat(s.slice(k)).join('')
};