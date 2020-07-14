function viralAdvertising(n) {
    let cumulativeLike = 0;
    let shared = 5;

    for(let i = 1; i <= n; i++) {
        cumulativeLike += Math.floor(shared / 2);
        shared = Math.floor(shared / 2) * 3;
    }

    return cumulativeLike;
}

console.log(viralAdvertising(3)) // 9