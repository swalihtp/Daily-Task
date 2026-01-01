/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    n=String(n)
    let str=""
    
    for(let i=n.length-1;i>=0;i--){
        str+=n[i]
    }
    return Math.abs(Number(n)-Number(str))
};