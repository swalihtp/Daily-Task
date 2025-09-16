var defangIPaddr = function(address) {
return address.split('.').join('[.]');
};

var defangIpaddr=function (address){
     return address.replace(/\./g, "[.]");
 
};

var defangIpaddr=function (address){
     return address.replaceAll(".", "[.]");
 
};

var defangIpaddr=function (address){
    let ans=""
     for(let i=0;i<address.length;i++){
        if(address[i]==="."){
            ans+="[.]"
        }else{
            ans+=address[i]
        }
     }
 return ans
};


console.log(defangIpaddr("1.1.1.1"))