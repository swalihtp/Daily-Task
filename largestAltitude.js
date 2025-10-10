var largestAltitude = function(gain) {
    gain.unshift(0)
    let num=0
    const result=[]
    for(let i=0;i<gain.length;i++){
        const ans=(num)+(gain[i])
        num=ans
        result.push(ans)
    }
    return Math.max(...result)
};
console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([0,-4,-7,-9,-10,-6,-3,-1]))