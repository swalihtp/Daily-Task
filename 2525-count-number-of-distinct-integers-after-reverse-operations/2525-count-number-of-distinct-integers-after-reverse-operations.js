/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let temp;
    const length=nums.length
    for(let i=0;i<length;i++){
        temp=String(nums[i]).split("").reverse().join("")
        nums.push(Number(temp))
        
    }
    const ans=new Set(nums)
    return ans.size
};