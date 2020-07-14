function utopianTree(n) {
    let height = 1;

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) height = height * 2
        else {
            height += 1
        }
    }

    return height;
}

console.log(utopianTree(0)) // 1
console.log(utopianTree(1)) // 2
console.log(utopianTree(4)) // 7
console.log(utopianTree(5)) // 14