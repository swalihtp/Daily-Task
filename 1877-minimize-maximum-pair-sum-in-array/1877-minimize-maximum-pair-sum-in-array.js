/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    let left=0
    let right=nums.length-1
    total=0

    while(right-left>0){
        const temp=nums[left]+nums[right]
        if(temp>total){
            total=temp
        }
        left++
        right--
    }
    return total
};