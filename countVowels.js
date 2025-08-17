function countVowels(str){
    const vowels=["a","e","i","o","u"];
    const strcon=str.toLowerCase();
    let count=0;
    for(let letter of strcon){
        for(let i=0;i<vowels.length;i++){
            if(letter===vowels[i]){
                count+=1;
            }
        }
    }return count;
}
console.log(countVowels("Hello World"));
