/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ans=[]
    for(let i=0;i<=nums.length;i++){
        index=Math.abs(nums[i])-1
        nums[index]=-nums[index]
        if(nums[index]>0) nums[index]=-nums[index]

    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            ans.push(i+1)
        }
    }return ans
};