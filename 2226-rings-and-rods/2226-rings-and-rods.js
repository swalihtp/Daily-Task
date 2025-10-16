/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let ans=0;
    const obj={0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}
    for(let i=0;i<rings.length;i+=2){
        if(!obj[rings [i+1]].includes (rings[i])){
            obj[rings [i+1]]+=rings[i]
        }
    }
    for(key in obj){
        if(obj[key].length===3){
            ans++
        }
    }return ans
};