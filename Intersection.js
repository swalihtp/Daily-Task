var intersection = function(nums1, nums2) {
    let ar=[]
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            if(!ar.includes(nums1[i])){
                ar.push(nums1[i])
            }
        }
    }return ar
};
console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))