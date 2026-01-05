/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const n1d=[]
    const n2d=[]
    for(let i=0;i<nums1.length;i++){
        if(!nums2.includes(nums1[i])) n1d.push(nums1[i])
        
    }
    for(let i=0;i<nums2.length;i++){
        if(!nums1.includes(nums2[i])) n2d.push(nums2[i])
        
    }
    return [Array.from(new Set(n1d)),Array.from(new Set(n2d))]
};