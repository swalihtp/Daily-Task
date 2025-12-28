/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if(s.length>words.length || s.length<words.length) {return false}
    let count=0;
    for(let i=0;i<words.length;i++){
        if(words[i][0]==s[i]){
            count++
        }
    }
    return count===s.length
};