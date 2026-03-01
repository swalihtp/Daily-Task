/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    const alpbts=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let temp=0
    let ans=""

    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            temp+=weights[words[i][j].charCodeAt(0)-97]
        }
        const modulo=temp%26
        console.log(temp)
        ans+=alpbts[(26-modulo)-1]
        temp=0
    }
    return ans
};