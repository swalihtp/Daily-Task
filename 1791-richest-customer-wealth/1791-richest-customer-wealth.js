/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let total=0;
  for(let i=0;i<accounts.length;i++){
    const s=accounts[i].reduce((total,value)=>{
        return total+value
    },0)
    if(s>total){
        total=s
    }
  }return total
};