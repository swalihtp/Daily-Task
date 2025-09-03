var smallerNumbersThanCurrent = function(nums) {
    let ans=[];
    for(let i=0;i<nums.length;i++){
        let num=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]&&nums[i]!==nums[j]){
                num+=1;
            }
        }ans.push(num)
    }return ans;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
