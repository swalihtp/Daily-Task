// function findTarget(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return `${i} ${j}`
                
//             }
//         }
//     }
// };
// console.log(findTarget([10,20,30,40,50],30));
// console.log(findTarget([10,20,30,40,50],70));

function findCount(arr){
    
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count
                console.log(arr[i]+" " +count);
                
            }
        }
    }
    
};
findCount([1,2,3,41,2,1,1]);
