let num=[1,2,5,8,1,3,0];
let result=num.filter((item,index)=>{
    return num.indexOf(item)==num.lastIndexOf(item)
});
console.log(result);


let variable=10;
delete variable;
console.log(variable);


"use strict";
const obj = {};
Object.defineProperty(obj, "prop", { value: 10, configurable: false});
delete obj.prop;  
console.log(obj)