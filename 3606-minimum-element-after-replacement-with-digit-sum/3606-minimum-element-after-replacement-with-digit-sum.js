/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let sam;
    const ans=[]
    
    for(i=0;i<nums.length;i++){
        sam=String(nums[i])
        let sum=0
        for(let j=0;j<sam.length;j++){
            sum+=Number(sam[j])
        }
        ans.push(sum)
    }
    return Math.min(...ans)
};