var arrayStringsAreEqual = function(word1, word2) {
     word1=word1.join("");
     word2=word2.join("");
    return word1===word2
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))