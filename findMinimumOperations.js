var minimumOperations = function(nums) {
    count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3===0){
            count+=0
        }else if (nums[i]/3<0){
            nums[i]+1
            count+=1
        }else{
            nums[i]-1
            count+=1
        }
    }return count
};
console.log(minimumOperations([1,2,3,4]))
console.log(minimumOperations([3,6,9]))