function equalizeArray(arr) {
    const counter = {};
    let maxFrequency = 0

    for(let i = 0; i < arr.length; i++) {
        counter[arr[i]] = (counter[arr[i]] || 0) + 1;
    }

    for (const key in counter) {
        if(counter[key] > maxFrequency) maxFrequency = counter[key]
    }

    return arr.length - maxFrequency;
}

console.log(equalizeArray([3, 3, 2, 1, 3])) // 2
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])) // 4