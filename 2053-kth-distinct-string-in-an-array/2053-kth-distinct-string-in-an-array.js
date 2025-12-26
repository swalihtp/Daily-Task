/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const obj={}
    const answer=[]
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]=obj[arr[i]]+1
        }else{
            obj[arr[i]]=1

        }
    }
    for(let key in obj){
        if(obj[key]===1) answer.push(key)
    }
    if(answer[k-1]) return answer[k-1]
    else return ""
};