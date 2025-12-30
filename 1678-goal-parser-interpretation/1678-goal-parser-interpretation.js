/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str=""
    for(let i=0;i<command.length;i++){
        if(command[i].toLowerCase()=='g'){
            str+=command[i]
        }else if(command[i]==="(" && command[i+1]===")"){
            str+="o"
            i=i+1
        }else{
            str+='al'
            i=i+3
        }
    }
    return str
};