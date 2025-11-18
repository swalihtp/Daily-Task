/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let u=new Set(arr)
    u=Array.from(u)
    let frequency=[]
    for(let i=0;i<u.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(u[i]==arr[j]){
                count++
            }
        }frequency.push(count)
    }
    const length=frequency.length
    frequency=new Set(frequency)
    return length===frequency.size
};