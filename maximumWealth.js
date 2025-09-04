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
console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));
