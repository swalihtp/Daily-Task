var reverseDegree = function(s) {
    const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
    const letters=s.split("")
    let ans=0
    for(let i=0;i<s.length;i++){
        const sample=alphabet.indexOf(s[i])
        ans+=(Math.abs((sample-26)*(i+1)))
    }return ans

};
console.log(reverseDegree("abc"));
