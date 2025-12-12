/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftsum=[]
    const rightsum=[]
    const ans=[]
    for(let i=0;i<nums.length;i++){
        let left=nums.slice(0,i)
        let right=nums.slice(i+1,nums.length)
        leftsum.push(
            left.reduce((prev,value)=>{return prev+value},0)
        )
        rightsum.push(
            right.reduce((prev,value)=>{return prev+value},0)
        )

    }
    for(let i=0;i<nums.length;i++){
        ans.push(
            Math.abs(leftsum[i]-rightsum[i])
        )
    }
    return ans
};