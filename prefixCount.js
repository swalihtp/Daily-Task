var prefixCount = function(words, pref) {
    let ar=[];
    let count=0;
    for(let i=0;i<words.length;i++){
        let sliced=words[i].slice(0,pref.length)
        ar.push(sliced)
    }
    for(let i=0;i<ar.length;i++){
        if(ar[i].includes(pref)){
            count++
        }
    }return count
};

console.log(prefixCount(["leetcode","win","loops","success"],"code"))
console.log(prefixCount(["pay","attention","practice","attend"],"at"))