function countingValleys(n, s) {
    let valleys = 0;
    let depth = 0;
    let belowSeaLevel = false;

    for(let i = 0; i < n; i++) {
        if(depth < 1) belowSeaLevel = true;
        else belowSeaLevel = false;

        if(s[i] === 'D') depth--;
        if(s[i] === 'U') depth++;
        if(belowSeaLevel && depth === 0) valleys++
    }

    return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU')); // 1
console.log(countingValleys(12, 'DDUUDDUDUUUD')); // 2