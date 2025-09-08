var differenceOfSum = function(nums) {
    let ans=0;
   let telements= nums.reduce((total,item)=> total +item,0)
    let digits=nums.join("").split("").map(Number)
    let sumOfDigits=digits.reduce((total,item)=>total+item,0)
    return telements-sumOfDigits
};
console.log(differenceOfSum([1,15,6,3]));
