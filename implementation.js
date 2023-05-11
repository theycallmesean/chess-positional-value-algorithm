function reachableSquares(pieceType, row, col) {
    const directions = {
        'rook': [[0, 1], [1, 0], [0, -1], [-1, 0]],
        // Add other piece types (e.g., 'bishop', 'queen', etc.) and their possible directions
    };

    let squares = [];
    for (const [dr, dc] of directions[pieceType]) {
        let r = row + dr;
        let c = col + dc;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            squares.push([r, c]);
            r += dr;
            c += dc;
        }
    }

    return squares;
}

function evaluatePosition(pieces, stepValueMatrix) {
    let totalValue = 0;
    for (const [pieceType, piecePosition] of pieces) {
        const [row, col] = piecePosition;
        const reachable = reachableSquares(pieceType, row, col);
        for (const [r, c] of reachable) {
            const value = stepValueMatrix[r][c];
            totalValue += value;
        }
    }
    return totalValue;
}

const stepValueMatrix = [
    [1, 2, 3, 4, 4, 3, 2, 1],
    [2, 3, 4, 5, 5, 4, 3, 2],
    [3, 4, 5, 6, 6, 5, 4, 3],
    [4, 5, 6, 7, 7, 6, 5, 4],
    [4, 5, 6, 7, 7, 6, 5, 4],
    [3, 4, 5, 6, 6, 5, 4, 3],
    [2, 3, 4, 5, 5, 4, 3, 2],
    [1, 2, 3, 4, 4, 3, 2, 1]
];

// Example: positions and types of pieces for one color (type, [row, col])
const pieces = [['rook', [0, 0]]];

const totalValue = evaluatePosition(pieces, stepValueMatrix);
console.log("Total value of the pieces:", totalValue);