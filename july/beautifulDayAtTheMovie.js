function beautifulDays(i, j, k) {
    let interval = 0;

    for(let a = i; a <= j; a++) {
        if(Math.abs((a - Number(String(a).split('').reverse().join(''))) % k === 0)) interval++
    }

    return interval;

}

console.log(beautifulDays(13, 45, 3)) // 33