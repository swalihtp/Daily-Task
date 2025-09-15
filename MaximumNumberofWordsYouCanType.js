var canBeTypedWords = function(text, brokenLetters) {
    const ar = text.split(" ");
    let count = 0;

    for (let i = 0; i < ar.length; i++) {
        let isBroken = false; 
        for (let j = 0; j < brokenLetters.length; j++) {
            if (ar[i].includes(brokenLetters[j])) {
                isBroken = true; 
                break; 
            }
        }
        if (!isBroken) count++; 
    }

    return count;
};

console.log(canBeTypedWords("hello world", "ad"));  
console.log(canBeTypedWords("leetcode", "e"));      
console.log(canBeTypedWords("leetcode", "lt"));      
