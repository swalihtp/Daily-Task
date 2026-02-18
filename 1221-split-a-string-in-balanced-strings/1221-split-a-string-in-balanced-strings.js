/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    s=s.split("")
    for(let i=0;i<s.length;i++){
        let temp=s.slice(0,i+1)
        const l=temp.filter((letter)=>letter==='L')
        const r=temp.filter((letter)=>letter==='R')
        if (l.length === r.length)count++
    }
    return count
};