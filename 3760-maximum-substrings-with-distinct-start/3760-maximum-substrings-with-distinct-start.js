/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    const ar=[]
    count=0;
    for(let i=0;i<s.length;i++){
        if(!ar.includes(s[i])&&s[i+1]!==s[i]){
            count++
            ar.push(s[i])
        }
    }
    return count
};