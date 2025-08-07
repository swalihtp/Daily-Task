let num=[1,2,5,8,1,3,0];
let result=num.filter((item,index)=>{
    return num.indexOf(item)==num.lastIndexOf(item)
});
console.log(result);
