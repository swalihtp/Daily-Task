/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    s=s.split("")
    let str=[]
    const vowels=["a","e","i","o","u"]
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
            str.push(s[i])
            s[i]="-"
        }
    }
    str=str.toSorted((a,b)=>{return a.charCodeAt(0)-b.charCodeAt(0)})
    for(let i=0;i<s.length;i++){
        if(s[i]=="-"){
            s[i]=str.shift()
        }
    }
    return s.join("")
};