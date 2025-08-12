let differenceOfSums = function(n, m) {
    let carr=[]
    for(let i=n;i>0;i--){
        carr.push(i)
    }
    let darr=carr.filter((item)=>{
        return item%m==0;
    });
    let ndarr=carr.filter((item)=>{
        return item%m!==0
    });
    let darrtotal=darr.reduce((total,item)=>{
        return total+item
    },0);
    let ndarrtotal=ndarr.reduce((total,item)=>{
        return total+item
    },0);
    return ndarrtotal-darrtotal
    
};
console.log(differenceOfSums(10,3));
console.log(differenceOfSums(100,2));
console.log(differenceOfSums(34,8));

