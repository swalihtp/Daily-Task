const Products=[
    {name:"A",price:200},
    {name:"B",price:100},
    {name:"C",price:150},
    {name:"D",price:200}
];

let result= Products.sort((a,b)=>{
return a.price-b.price
});
console.log(result);
