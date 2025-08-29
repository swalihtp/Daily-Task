var transformArray = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            nums[i]=0
        }else{
            nums[i]=1
        }
    }return nums.sort((a,b)=>{
        return a-b
    })
};
console.log(transformArray([1,2,4,3]));
console.log(transformArray([1,5,1,4,2]));
console.log(transformArray([4,3,2,1]));
