/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    let balance=0
    
    for (let c of s){
        if (c==='R'){
            balance++
        }else{
            balance--
        }
        if(balance===0) count++
    }
    return count
};