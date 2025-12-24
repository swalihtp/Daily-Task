/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i=0;i<k;i++){
        const small=Math.min(...nums)
        const index=nums.indexOf(small)
        nums[index]=small*multiplier
    }
    return nums
};