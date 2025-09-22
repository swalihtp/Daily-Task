var restoreString = function(s, indices) {
    ans=[]
    for(let i=0;i<s.length;i++){
        ans[indices[i]]=s[i]
    }
    return ans.join("")
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))