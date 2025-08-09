//task 3 a
console.log(Math.floor(Math.random()*(1+99)));


//b
let num=[23,45,67,12,89,3];

console.log(Math.max(...num));
console.log(Math.min(...num));

// c
function squareRoot(number){
    return Math.sqrt(number)
};
console.log(squareRoot(2));




//basic math function practice

function myFunction(arr,k){
    let kcon=String(k);
    arr.splice(arr.length-kcon.length,kcon.length);

    for(let i=0;i<kcon.length;i++){
        arr.push(Number(kcon[i]))
    }
    
    return arr;
};
console.log(myFunction([1,2,0,0],34));
console.log(myFunction([1,2,0,0],234));
console.log(myFunction([1,2,0,0,2],234));



