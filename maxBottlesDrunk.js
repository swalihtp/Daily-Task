var maxBottlesDrunk = function(numBottles, numExchange) {
    let emptyBottles=numBottles;

    while (emptyBottles>=numExchange) {
        emptyBottles = emptyBottles-numExchange+1; 
        numExchange++;
        numBottles++
    }

    return numBottles;
};

console.log(maxBottlesDrunk(13,6))
console.log(maxBottlesDrunk(10,3))