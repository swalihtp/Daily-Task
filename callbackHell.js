function myFunction(number,callback){
    console.log(number);
    callback(number);
    
}
function square(number,callback){
    const squared=number*number;
    console.log(squared);
    callback(squared);
    
}
function add(number,callback){
    const res=number+5;
    callback(res);
    
}
function final(number){
    console.log(number);
    
}

myFunction(5,function(num){
    square(num,function(sq){
        add(sq,function(fnl){
            final(fnl);
        });
    });
});