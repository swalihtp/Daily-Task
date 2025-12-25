/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const arr=[]
    nums=nums.sort((a,b)=>{ return a-b })
    for(let i=1;i<nums.length;i+=2){
        arr.push(nums[i])
        arr.push(nums[i-1])
    }
    return arr
};