/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sam;
    const ans=s.split("")
    const vowels=["a","e","i","o","u"]
    const ar=[]
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
            ar.unshift(s[i])
        }
    }
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
            ans[i]=ar.shift()
        }
    }
    return ans.join("")
};