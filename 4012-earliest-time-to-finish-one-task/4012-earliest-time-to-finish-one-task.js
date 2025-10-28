/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let ans=[];
    for(let i=0;i<tasks.length;i++){
      let sam=  tasks[i].reduce((total,value)=>{return total+value},0)
      ans.push(sam)
    }return Math.min(...ans)
};