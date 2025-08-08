

function findAverage(students){
    for(let i=0;i<students.length;i++){
        let average=students[i].marks.reduce((total,item)=>{
            return total+item
        })/students[i].marks.length;
        average=Math.round(average);
        students[i].average=average;

        console.log(`${students[i].name} has scored ${students[i].average} on average`);
        
    }
    
};
findAverage([
    {name:"Jhon",marks:[93,87,56]},
    {name:"Jerry",marks:[83,88,86]},
    {name:"Any",marks:[83,56,96]},
    {name:"Sesko",marks:[43,76,56]}
]);