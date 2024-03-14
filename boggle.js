function boggleBoard(gameBoard) {
    const letters = gameBoard.split(/\s+/);

    const board = [
        letters.slice(0, 5),
        letters.slice(5, 10),
        letters.slice(10, 15),
        letters.slice(15, 20),
        letters.slice(20, 25),
    ];
    return board;
}

function findFrom(board, word, y, x, seen) {
    if (board[y][x] != word[0]) return false;
    if (seen.has(y + '-' + x)) return false;
    if (word.length === 1) return true;

    seen = new Set(seen);
    seen.add(y + '-' + x);

    if (y > 0 && findFrom(board, word.slice(1), y - 1, x, seen)) return true;
    if (y < 4 && findFrom(board, word.slice(1), y + 1, x, seen)) return true;
    if (x > 0 && findFrom(board, word.slice(1), y, x - 1, seen)) return true;
    if (x < 4 && findFrom(board, word.slice(1), y, x + 1, seen)) return true;

    return false;
}

function find(board, word) {
    for (let y= 0; y < 5; y++)
        for(let x = 0; x < 5; x++)
            if(findFrom(board, word, y, x, new Set())) return true;
    return false;
}