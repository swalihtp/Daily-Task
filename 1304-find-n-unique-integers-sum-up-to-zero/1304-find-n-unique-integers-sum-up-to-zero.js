/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ans=[]
    for(let i=1;i<=n;i++){
        if(i===n){
            const value=ans.reduce((total,value)=>{return total+value},0)
            ans.push(-value)
        }else{
            ans.push(i)
        } 
    }
    return ans
};