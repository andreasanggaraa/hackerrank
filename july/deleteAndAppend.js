function appendAndDelete(s, t, k) {
    // if(s === t) return 'Yes';

    let sameWord = 0;
    let isRepeat = true;

    for(let i = 0;i < t.length; i++) {
        if(t[0] !== t[i]) isRepeat = false;

        if(s[i] === t[i]) sameWord++
        else break;
    }

    if(isRepeat && Math.abs(t.length - s.length) < k) return 'Yes'
    if(s.length - sameWord + t.length - sameWord === k) return 'Yes'
    return 'No'
}


// console.log(appendAndDelete('hackerhappy', 'hackerrank', 9)); // YES
// console.log(appendAndDelete('aba', 'aba', 7)); // YES
// console.log(appendAndDelete('abcd', 'abcdert', 10)); // No
// console.log(appendAndDelete('ash', 'ashley', 2)); // NO