/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(Array.from(new Set(nums)).length<3){
        return Math.max(...nums)
    }
    nums=Array.from(new Set(nums)).sort((a,b)=>{return b-a})
    return nums[2]
};