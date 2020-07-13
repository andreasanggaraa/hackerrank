function pageCount(n, p) {
    if(n === p) return 0;
    if(p === 1) return 0;
    if(n % 2 !== 0 && p === n - 1) return 0;
    if(n % 2 === 0 && p === n - 1) return 1;

    if(p < Math.round(n / 2)) {
        return Math.ceil((p - 1) / 2)
    } else {
        return Math.ceil((n - p) / 2)
    }
}


console.log(pageCount(6, 2)); // 1
console.log(pageCount(6, 5)); // 1