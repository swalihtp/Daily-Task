/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = {
    'a': '.-',   'b': '-...', 'c': '-.-.', 'd': '-..',  'e': '.',
    'f': '..-.', 'g': '--.',  'h': '....', 'i': '..',   'j': '.---',
    'k': '-.-',  'l': '.-..', 'm': '--',   'n': '-.',   'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.',  's': '...',  't': '-',
    'u': '..-',  'v': '...-', 'w': '.--',  'x': '-..-', 'y': '-.--',
    'z': '--..'
    };
    let ar=[]
    for(let i=0;i<words.length;i++){
        let str=""
        for(let j=0;j<words[i].length;j++){
            str+=morseCode[words[i][j]]
        }
        ar.push(str)
    }
    ar=new Set(ar)
    return ar.size
    
};