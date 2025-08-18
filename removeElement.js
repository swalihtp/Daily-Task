var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
            i--
        }
    }return nums.length
};
console.log(removeElement([2,2,2,3,5,6,7,8],2));
