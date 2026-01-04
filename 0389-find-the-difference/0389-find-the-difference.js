/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s=s.split("")
    t=t.split("")
    const sTotal=s.reduce((acc,item)=>{return acc+item.charCodeAt(0)},0)
    const tTotal=t.reduce((acc,item)=>{return acc+item.charCodeAt(0)},0)
    return String.fromCharCode(tTotal-sTotal)

};