/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    if(num1===0 || num2==0) return 0
    let operationCount=0;
    let flag=false
    while(!flag){
        if(num1>=num2){
            num1=num1-num2
            operationCount++
            flag=num1===0
        }else{
            num2=num2-num1
            operationCount++
            flag=num2===0
        }
    }
    return operationCount
};