/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd=0
    let sumEven=0
    for(let i=1;i<n*2;i++){
        if(i%2==0){
            sumEven+=i
        }else{
            sumOdd+=i
        }
    }
    return Math.abs(sumOdd-sumEven)
};