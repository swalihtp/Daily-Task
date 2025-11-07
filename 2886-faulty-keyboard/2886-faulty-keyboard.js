/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let ans=""
    for(let i=0;i<s.length;i++){
        if(s[i]==="i"){
            let demo=""
            for(let j=ans.length-1;j>=0;j--){
                demo+=ans[j]
            }
            ans=demo

        }else{
            ans+=s[i]
        }
        
    }return ans
};