var findNumbers = function(nums) {
    prevans=[];
    count=0;
    for(let i=0;i<nums.length;i++){
        prevans.push(nums[i].toString().length)
    }
    for(let j=0;j<prevans.length;j++){
        if(prevans[j]%2==0){
            count++
        }
    }
    return count
};
console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));

