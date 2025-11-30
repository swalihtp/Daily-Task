/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xcon=String(x)
    let xstr="";
    for(i=xcon.length-1;i>=0;i--){
        xstr+=xcon[i]
    }
    
    if(Number(xstr)===x){
        return true
    }else{
        return false
    }
    
};

console.log(isPalindrome(121));