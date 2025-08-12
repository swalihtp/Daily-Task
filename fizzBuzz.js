function fizzBuzz(num){
    if(num%3==0&&num%5==0){
        return "fizzBuzz"
    }else if(num%3==0){
        return "Buzz"
    }else{
        return "Fizz"
    }
};
console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
