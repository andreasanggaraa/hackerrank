function designerPdfViewer(h, word) {
    const split = word.split('');
    let maxHeight = 0;

    for(let i = 0; i < split.length; i++) {
        let charPos = h[(split[i].charCodeAt(0) - 97)];
        if(charPos > maxHeight) maxHeight = charPos;
    }

    return maxHeight * split.length;
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba') // 28