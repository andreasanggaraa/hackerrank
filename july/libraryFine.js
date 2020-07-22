function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(y2 < y1) return 10000;
    if(m2 < m1 && y2 === y1) return 500 * (m1 - m2);
    if(d2 < d1 && y2 === y1 && m2 === m1) return 15 * (d1 - d2);
    return 0;
}

console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
console.log(libraryFine(6, 6, 2015, 9, 6, 2016));