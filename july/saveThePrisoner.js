function saveThePrisoner(n, m, s) {
    return ((m % n) + s) - 1
}

console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(352926151, 380324688, 94730870)); // 122129406
console.log(saveThePrisoner(94431605, 679262176, 5284458)); // 23525398