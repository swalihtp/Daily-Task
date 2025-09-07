var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(jewels[i]===stones[j]){
                count++
            }
        }
    }return count
};
console.log(numJewelsInStones("aA","aAAbbbb"));
console.log(numJewelsInStones("z","ZZ"));
console.log(numJewelsInStones("b","c"));
console.log(numJewelsInStones("A","aAAbbbb"));
console.log(numJewelsInStones("a","aAAbbbb"));
