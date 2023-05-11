def reachable_squares(piece_type, row, col):
    directions = {
        'rook': [(0, 1), (1, 0), (0, -1), (-1, 0)],
        # Add other piece types (e.g., 'bishop', 'queen', etc.) and their possible directions
    }

    squares = []
    for dr, dc in directions[piece_type]:
        r, c = row + dr, col + dc
        while 0 <= r < 8 and 0 <= c < 8:
            squares.append((r, c))
            r += dr
            c += dc

    return squares

def evaluate_position(pieces, step_value_matrix):
    total_value = 0
    for piece_type, piece_position in pieces:
        row, col = piece_position
        reachable = reachable_squares(piece_type, row, col)
        for r, c in reachable:
            value = step_value_matrix[r][c]
            total_value += value
    return total_value

step_value_matrix = [ # As represented by our heatmap
    [1, 2, 3, 4, 4, 3, 2, 1],
    [2, 3, 4, 5, 5, 4, 3, 2],
    [3, 4, 5, 6, 6, 5, 4, 3],
    [4, 5, 6, 7, 7, 6, 5, 4],
    [4, 5, 6, 7, 7, 6, 5, 4],
    [3, 4, 5, 6, 6, 5, 4, 3],
    [2, 3, 4, 5, 5, 4, 3, 2],
    [1, 2, 3, 4, 4, 3, 2, 1]
]

# Example: positions and types of pieces for one color (type, (row, col))
pieces = [('rook', (0, 0))] # Only the rook piece is considered in this example for the sake of simplicity

total_value = evaluate_position(pieces, step_value_matrix)
print("Total value of the pieces:", total_value)