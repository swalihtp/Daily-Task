/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const ans=[]
    s1=s1.split(" ")
    s2=s2.split(" ")
    const total=[...s1,...s2]
    
    for(let i=0;i<total.length;i++){
        let count=0;
        for(let j=0;j<total.length;j++){
            if(total[i]===total[j]&&i!==j){
                count++
                break;
            }
        }
        if(count==0){
            ans.push(total[i])
        }
    }
    return ans
};