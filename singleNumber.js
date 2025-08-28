
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                count++;
            }
        }
        if (count === 0) {
            return nums[i];
        }
    }
};

console.log(singleNumber([2, 2, 1]));     // 1
console.log(singleNumber([1, 2, 1, 4, 2])); // 4
