/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels=[]
    let others=[]
    for(let i=0;i<s.length;i++){
        if(/[aeiou]/.test(s[i].toLowerCase())){
            vowels.push(s[i])
        }else{
            others.push(s[i])
        }
    }
    const vowelMaxChar={}
    let maxVowel=null
    let maxVowelCount=0
    for(let i=0;i<vowels.length;i++){
        vowelMaxChar[vowels[i]]=(vowelMaxChar[vowels[i]]||0)+1
            if( vowelMaxChar[vowels[i]]>maxVowelCount){
            maxVowelCount=vowelMaxChar[vowels[i]]
        }

    }
    const othersMaxChar={}
    let maxOther=null
    let maxOtherCount=0
    for(let i=0;i<others.length;i++){
        othersMaxChar[others[i]]=(othersMaxChar[others[i]]||0)+1
        if(othersMaxChar[others[i]]>maxOtherCount){
            maxOtherCount=othersMaxChar[others[i]]
        }
    }
    return maxVowelCount+maxOtherCount
};