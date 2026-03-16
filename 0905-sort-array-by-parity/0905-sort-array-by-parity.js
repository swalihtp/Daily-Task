/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const even=nums.filter((num)=>{return num%2==0})
    const odd=nums.filter((num)=>{return num%2!==0})
    const ans=even.concat(odd)
    return ans
};