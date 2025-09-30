var recoverOrder = function(order, friends) {
    let sample=[]
    let ans=[]
    for(let i=0;i<friends.length;i++){
        sample.push(order.indexOf(friends[i]))
    }
    for(let i=0;i<sample.length;i++){
        ans[sample[i]]=order[sample[i]]
    }
    return ans.filter(item=>item!=="undefiened")
};

console.log(recoverOrder([3,1,2,5,4],[1,3,4]))
console.log(recoverOrder([1,4,5,3,2],[2,5]))