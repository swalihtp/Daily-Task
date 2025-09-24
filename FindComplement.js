var findComplement = function(num) {
    ans=""
    const binary=num.toString(2)    
    for(let i=0;i<binary.length;i++){
        if(binary[i]==1){
            ans+=0
        }else{
            ans+=1
        }
    }
    return parseInt(ans,2)
};
console.log(findComplement(5))