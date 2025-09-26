var maximum69Number  = function(num) {
    nums=num.toString()
    let ans=[]
    for(let i=0;i<nums.length;i++){
        num=nums.split("")
        num[i]="9"
        num=num.join("")
        ans.push(Number(num))

    }
    return Math.max(...ans)
};
console.log(maximum69Number(9669) ;)