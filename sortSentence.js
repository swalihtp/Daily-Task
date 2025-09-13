var sortSentence = function(s) {
    const con=s.split(" ")
    let i=0;
    let ans=[];
    while(i<con.length){
        let j=con[i].slice(-1)
        ans[j-1]=con[i]
        i++
    }
    ans=ans.map(item=>item.slice(0,-1))
    let result=ans.join(" ")
    return result

    
};
console.log(sortSentence("is2 sentence4 This1 a3"));

var sortSentence = function(s) {
  return s
    .split(" ")
    .sort((a, b) => a.slice(-1) - b.slice(-1))   
    .map(word => word.slice(0, -1))              
    .join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
