/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const result=[];
    for(let i=0;i<sentences.length;i++){
        result.push(sentences[i].split(" ").length)
    }
    return Math.max(...result)
};
