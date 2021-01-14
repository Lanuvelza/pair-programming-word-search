const wordSearch = (letters, word) => { 

    if (letters === undefined || word === undefined) {
        return undefined;
    } else if (letters.length === 0) {
                return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const vertical = []; 
    for (let row of letters) {
        vertical.push([]);
    }

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            vertical[j].push(letters[i][j]);
        }
    }
    
    const verticalJoin = vertical.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if(l.includes(word)) {
            return true;
        }
    }
    
    return false;
}

module.exports = wordSearch