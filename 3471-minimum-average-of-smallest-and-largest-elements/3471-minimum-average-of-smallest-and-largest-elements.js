/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    const res=[]
    while (nums.length>0){
        let big=Math.max(...nums)
        let small=Math.min(...nums)
        nums.splice(nums.indexOf(big),1)
        nums.splice(nums.indexOf(small),1)
        res.push((big+small)/2)
    }
    return Math.min(...res)
};