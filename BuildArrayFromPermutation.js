var buildArray = function(nums) {
    let ans=[];
    for(let i=0;i<nums.length;i++){
        ans.push(nums[nums[i]])
    };
    return ans
};
console.log(buildArray([6,2,0,5,1,3,4]));
