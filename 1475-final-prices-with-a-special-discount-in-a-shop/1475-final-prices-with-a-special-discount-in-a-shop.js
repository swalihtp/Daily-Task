/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
   const ans=[]
   for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[j]<=prices[i]){
            ans.push(prices[i]-prices[j])
            break;
        }
    }
    if(ans.length<=i){
        ans.push(prices[i])
    }
   }
   return ans;
};