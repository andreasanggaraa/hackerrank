function catAndMouse(x, y, z) {
    const catADistance = Math.abs(z - x)
    const catBDistance = Math.abs(z - y)

    if(catBDistance > catADistance) return 'Cat A';
    if(catADistance > catBDistance) return 'Cat B';
    if(catADistance === catBDistance) return 'Mouse C';
}

console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C