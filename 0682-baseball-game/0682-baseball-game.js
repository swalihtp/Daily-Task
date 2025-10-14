/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   let ar=[]
   for(let i=0;i<operations.length;i++){
    if (!isNaN(operations[i])) {
        ar.push(Number(operations[i]))
    }else if(operations[i]==="+"){
        ar.push(Number(ar[(ar.length-1)]+ar[(ar.length-2)]))
    }else if(operations[i]==="D"){
        ar.push(Number((ar[ar.length-1] * 2)))
    }else{
        ar.pop()
    }
   }return ar.reduce((total,value)=>{return total+value},0)
};