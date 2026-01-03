/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    const single=nums.filter((n)=> {return n<10})
    const double=nums.filter((n)=>{return n>=10})
    return single.reduce((a,b)=>{return a+b},0)!==double.reduce((a,b)=>{return a+b},0)
};