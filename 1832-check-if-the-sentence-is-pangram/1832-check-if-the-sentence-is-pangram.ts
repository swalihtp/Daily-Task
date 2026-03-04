function checkIfPangram(sentence: string): boolean {
    const alp='abcdefghijklmnopqrstuvwxyz'
    for(let i=0;i<26;i++){
        if(!sentence.includes(alp[i])){
            return false
        }
    }
    return true
};