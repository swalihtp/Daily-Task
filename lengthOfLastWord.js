function lengthOfLastWord(s) {
    let sarr = s.split(" ");
    let ans=sarr.filter((item)=>{
        return item!=="";
    })
    return ans[ans.length-1].length
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("    Hell    o World           "));
console.log(lengthOfLastWord("Hello World  what       us   kd"));
console.log(lengthOfLastWord("a"));
