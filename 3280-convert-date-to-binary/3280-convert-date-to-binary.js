/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    date=date.split("-")
    const ans=[]
    for(let i=0;i<date.length;i++){
        ans.push(Number(date[i]).toString(2));
    }
     return ans.join("-")
}