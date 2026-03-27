/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    const temp=String(num).split("").sort((a,b)=>a-b)
    let num1=""
    let num2=""

    for(let i=0;i<temp.length;i++){
        if(i%2==0){
            num1+=temp[i]
        }else{
            num2+=temp[i]
        }
    }
    return Number(num1)+Number(num2)
};