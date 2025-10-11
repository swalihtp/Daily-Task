/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let ans=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]===nums[i]&&!ans.includes(nums[j])){
                ans.push(nums[j])
            }
        }
    }return ans
};