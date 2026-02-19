/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels=["a","e","i","o","u"]
    const a=s.split("").slice(0,s.length/2)
    const b=s.split("").slice(s.length/2)
    let vowelCountOfA=0
    let vowelCountOfB=0

    for(let i=0;i<a.length;i++){
        if(vowels.includes(a[i].toLowerCase())){
            vowelCountOfA++
        }
    }
    for(let i=0;i<b.length;i++){
        if(vowels.includes(b[i].toLowerCase())){
            vowelCountOfB++
        }
    }
    
    return vowelCountOfA===vowelCountOfB
        
};