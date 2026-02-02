/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        const temp=String(nums[i]).split("").map(value=>Number(value))
        let big=String(Math.max(...temp))
        while(big.length<temp.length){
            big+=big[0]
        }
        sum+=Number(big)
    }
    return sum
};