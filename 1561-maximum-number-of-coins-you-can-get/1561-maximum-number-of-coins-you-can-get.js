/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b)
    let left=0
    let right=piles.length-1
    let total=0;
    while(left<right){
        right--
        total+=piles[right]
        right--
        left++
    }
    return total
};