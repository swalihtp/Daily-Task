var mostWordsFound = function(sentences) {
    const result=[];
    for(let i=0;i<sentences.length;i++){
        result.push(sentences[i].split(" ").length)
    }
    return Math.max(...result)
};
console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]))