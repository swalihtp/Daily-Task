/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        const target = nums1[i];
        const index = nums2.indexOf(target);
        let nextGreater = -1;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > target) {
                nextGreater = nums2[j];
                break;
            }
        }
        ans.push(nextGreater);
    }
    return ans;
};
