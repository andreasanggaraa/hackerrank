function getMoneySpent(keyboards, drives, b) {
    let total = 0;

    for(let i = 0; i < keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            let combinationN = keyboards[i] + drives[j];
            
            if(combinationN <= b && combinationN > total) {
                total = combinationN;
            }
        }
    }

    if(total === 0) return - 1;
    else return total;
}

console.log(getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10)); // 9
console.log(getMoneySpent([ 4 ], [ 5 ], 5)); // -1
