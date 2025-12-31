/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    const big=Math.max(...nums)
    const small=Math.min(...nums)
    for(let num of nums){
        if (num!==big && num!==small){
            return num
        }
    }
    return -1
};