var numberOfSteps = function(num) {
    let number=num
    let steps=0;
    while(number>0){
        if(number%2==0){
            number=number/2
        }else{
            number=number-1
        }
        steps++
    }return steps
};
console.log(numberOfSteps(14))