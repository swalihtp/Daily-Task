/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const ans=[]
    for(let i=Math.min(...nums);i<Math.max(...nums);i++){
        if(!nums.includes(i)){ans.push(i)}
    }
    if (ans) return ans
    else return []
};