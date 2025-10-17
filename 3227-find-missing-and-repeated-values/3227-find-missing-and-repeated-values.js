/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let ans=[]
    let dupe;
    let test=undefined;
    grid=grid.flat()
    const largeNum=Math.max(...grid)
    for(let i=0;i<grid.length;i++){
        for(let j=i+1;j<grid.length;j++){
            if(grid[i]===grid[j]){
                dupe=grid[i]
                break;
            }
        }
    }
    ans.push(dupe)
    for(let i=1;i<largeNum;i++){
        if(!grid.includes(i)){
            ans.push(i)
            return ans
        }
    }
    if(!test){
        ans.push(largeNum+1)
        return ans 
    }


};