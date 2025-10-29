/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    
    let answer=[]
    for(let target=0;target<boxes.length;target++){
        let count=0;
        for(let box=0;box<boxes.length;box++){
            if(boxes[box]=='1'){
               count+=Math.abs(target-box)
            }
    
        }answer.push(count)
    }return answer
};