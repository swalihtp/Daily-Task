var pivotArray = function(nums, pivot) {
    const ar1=nums.filter(item=>item<pivot)
    const ar2=nums.filter(item=>item==pivot)
    const ar3=nums.filter(item=>item>pivot)
    const ans=[...ar1,...ar2,...ar3]
    return ans
};
console.log(pivotArray([9,12,5,10,14,3,10],10))
console.log(pivotArray([-3,4,3,2],2))