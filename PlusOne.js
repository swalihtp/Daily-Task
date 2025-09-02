var plusOne = function(digits) {
    let ans="";
    for(let i=0;i<digits.length;i++){
        ans+=digits[i]
    }
   ans=Number(ans);
   ans+=1;
   ans=String(ans)
   ans=String(ans)
   for(let j=0;j<ans.length;j++){
    digits[j]=Number(ans[j])
   }
    
    return digits



    
};




console.log(plusOne([9,9,9]));
console.log(plusOne([1,2,3]));