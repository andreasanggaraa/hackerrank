function howManyGames(p, d, m, s) {
    let games = 0;
    let moneySpent = 0;
    
    while (moneySpent < s) {
        if((moneySpent + p) > s) break;

        moneySpent += p;
        p -= d;
        if(p <= m) p = m;
        games++;
    }

    return games;
}

console.log(howManyGames(20, 3, 6, 85)) // 7
console.log(howManyGames(20, 3, 6, 80)) // 6