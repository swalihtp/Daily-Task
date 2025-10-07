var sortPeople = function(names, heights) {
    let ar=[]
    while(heights.length>0){
        let x=heights.indexOf(Math.max(...heights))
        ar.push(names[x])
        names.splice(x,1)
        heights.splice(x,1)
    }return ar
};
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))