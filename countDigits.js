var countDigits = function(num) {
    let digits=num.toString().split("").map(Number);
    let count=0;
    for(let i=0;i<digits.length;i++){
        if(digits[i]!==0&&num%digits[i]==0){
            count++
        }
    }
    return count;
};
console.log(countDigits(121)) 
console.log(countDigits(123)) 
console.log(countDigits(7)) 
console.log(countDigits(1012)) 
