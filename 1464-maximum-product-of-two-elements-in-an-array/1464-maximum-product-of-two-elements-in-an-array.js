/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const big1=Math.max(...nums)
    nums.splice(nums.indexOf(big1),1)
    const big2=Math.max(...nums)
    nums.splice(nums.indexOf(big2),1)
    return (big1-1)*(big2-1)
};