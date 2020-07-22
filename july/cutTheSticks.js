function cutTheSticks(arr) {
    let answer = [];

    while(true) {

        const shortest = Math.min(...arr);
        if(shortest === Infinity) break;

        answer.push(arr.length);
        let newArray = [];

        arr.forEach(element => {
            if(element - shortest > 0) newArray.push(element - shortest)
        });

        arr = newArray ;
        
    }

    return answer
}

console.log(cutTheSticks([ 5, 4, 4, 2, 2, 8 ]));