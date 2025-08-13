function getData(isSuccess){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isSuccess==true){
                resolve("Request Successfull")
            }else{
                reject("Request failed")
            }
        },2000)
    })
};
getData(true)
.then((data)=>console.log(data))
.catch((data)=>console.log(data));
getData(false)
.then((data)=>console.log(data))
.catch((data)=>console.log(data))