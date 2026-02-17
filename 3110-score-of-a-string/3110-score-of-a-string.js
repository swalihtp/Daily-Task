/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let total=[];
    let result=[];
    for(let i=0;i<s.length;i++){
        total.push(s.charCodeAt(i))
    }
    for(let j=0;j<total.length-1;j++){
        result.push(Math.abs(total[j]-total[j+1]))
    }
    result=result.reduce((total,num)=>{
        return total+num
    },0)
    return result;
    
};