/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum=nums.reduce((prev,num)=>{return prev+num})
    return sum%k
};