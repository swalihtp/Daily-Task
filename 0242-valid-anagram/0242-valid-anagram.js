/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (t.length>s.length || s.length>t.length){
        return false
    }
    s=s.split("")
    for(let i=0;i<t.length;i++){
        if(s.includes(t[i])){
            const index=s.indexOf(t[i])
            s.splice(index,1)
        }else{
            return false
        }
    }return true
};