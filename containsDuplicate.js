var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};
console.log(containsDuplicate([1,2,34,1]));
console.log(containsDuplicate([1,2,34]));
