/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        const n1 = ans.slice(0, index[i]);
        n1.push(nums[i]);
        const n2 = ans.slice(index[i]);
        ans = n1.concat(n2);
    }
    return ans;
};
