/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result=[];
    function mini(current,open,close){
        if(current.length==n*2){
            result.push(current) 
            return;
        }if(open<n){
            mini(current+"(",open+1,close)
        }if(close<open){
            mini(current+")",open,close+1)
        }
        
    }
    mini("",0,0)
    return result
  
};