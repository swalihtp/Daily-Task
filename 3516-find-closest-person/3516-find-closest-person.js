/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let one=Math.abs(z-x)
    let two=Math.abs(z-y)
    if(one<two)return 1
    else if (two<one)return 2
    else return 0
};