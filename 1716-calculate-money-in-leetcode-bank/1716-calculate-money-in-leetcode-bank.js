/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let mond = 1;  
    let money = 0;
    let temp = 1;  
    
    for (let i = 0; i < n; i++) {
        if (i % 7 === 0) {   
            money += mond;
            temp = mond;
            mond++;
        } else {
            temp++;
            money += temp;
        }
    }
    return money;
};
