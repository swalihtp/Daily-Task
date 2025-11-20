/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const small=Math.min(...nums)
    const big=Math.max(...nums)
    for(let i=big;i>=0;i--){
        if(big%i===0&&small%i==0){
            return i
        }
    }
};