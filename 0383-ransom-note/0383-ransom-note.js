/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomeNote=ransomNote.split("")
    magazine=magazine.split("")
    let count=0;
    for(let i=0;i<ransomeNote.length;i++){
        if(magazine.includes(ransomeNote[i])){
            magazine.splice(magazine.indexOf(ransomeNote[i]),1)
            count++
        }
    }
    return count===ransomeNote.length
};