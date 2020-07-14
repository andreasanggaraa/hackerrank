function angryProfessor(k, a) {
    let attendance = 0;

    for(let i = 0; i < a.length; i++) {
        if(a[i] <= 0) {
            attendance++
        }
    }
    
    if(attendance >= k) return 'NO'
    return 'YES'
}

console.log(angryProfessor(3, [ -1, -3, 4, 2 ])) // YES
console.log(angryProfessor(2, [ 0, -1, 2, 1 ])) // NO