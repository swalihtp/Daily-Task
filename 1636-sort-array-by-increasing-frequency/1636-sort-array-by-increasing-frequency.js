/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const ans=[]
    const obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]=obj[nums[i]]+1
        }else{
            obj[nums[i]]=1
        }
    }
    const fba = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => {
        if (valueA === valueB) {
            return keyB - keyA; // descending by number
        }
        return valueA - valueB; // ascending by frequency
    });

    for(let i=0 ; i<fba.length ; i++){
        let length=fba[i][1]
        while(length>0){
            ans.push(Number(fba[i][0]))
            length--
        }
    }
    return ans
    
};