/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const nums1big=Math.max(...nums1)
    const nums2big=Math.max(...nums2)
    let x=0
    if (nums2big>nums1big || nums1big===nums2big){
        while(true){
            let time=0
            for(let i=0;i<nums1.length;i++){
                if(nums2.includes(nums1[i]+x)) time++
                else break;
            }
            if (time===nums2.length){return x}
            x++

        }

    }
    if (nums1big>nums2big){
        while(true){
            let time=0
            for(let i=0;i<nums1.length;i++){
                if(nums2.includes(nums1[i]+x)) time++
                else break;
            }
            if (time===nums2.length){return x}
            x--

        }

    }
};