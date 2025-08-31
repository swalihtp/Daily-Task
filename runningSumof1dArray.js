var runningSum = function(nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
        let ans=0;
        for(let j=i;j>=0;j--){
            if(i>0){
                ans+=nums[j]
            }else{
                ans+=nums[i]
            }
        }result.push(ans)
    }return result
};
console.log(runningSum([1,2,3,4]));
