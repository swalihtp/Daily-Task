var shuffle = function(nums, n) {
    let ans=[];
    let ar1=nums.filter((item,index)=>index<nums.length/2)
    let ar2=nums.filter((item,index)=>index>=nums.length/2)
    for(let i=0;i<nums.length/2;i++){
        ans.push(ar1[i])
        ans.push(ar2[i])
    }return ans
};
console.log(shuffle([2,5,1,3,4,7],3));
