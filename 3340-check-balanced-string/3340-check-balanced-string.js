/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd=0;
    let even=0;
    for(let i=0;i<num.length;i++){
        if(i%2==0)odd+=Number(num[i])
        else even+=Number(num[i])
    }
    return odd===even
};