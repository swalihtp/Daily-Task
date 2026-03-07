/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const strings= new Set()
    let count=0
    for (let word of words){
        if(strings.has(word)){
            count++
        }else{
            strings.add(word.split("").reverse().join(""))
        }
    }
    return count
};