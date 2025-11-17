/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ans=[]
    const obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]=obj[nums[i]] + 1;
        }else{
            obj[nums[i]]=1
        }
    }
    for (value in obj){
        if(obj[value]>1){
            ans.push(Number(value))
        }
    }
    return ans
};