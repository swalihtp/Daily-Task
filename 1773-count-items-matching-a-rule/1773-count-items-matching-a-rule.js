/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let index;
    let count = 0
    switch (ruleKey) {
        case 'type':
            index = 0;
            break;
        case 'color':
            index = 1; break;
        case 'name':
            index = 2;
            break;
        default:
            index = 0;
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i][index] === ruleValue) {
            count++
        }
    }
    return count
};