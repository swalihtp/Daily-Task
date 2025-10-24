/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sam= s.split(" ")
    sam=sam.filter(item=>item.length>=1)
    let ans=[]
    for(let i=sam.length-1;i>=0;i--){
        ans.push(sam[i])
    }return ans.join(" ")
};