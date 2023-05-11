V = ∑ (i=1 to n) ∑ (r, c) ∈ Rᵢ Mᵣ,ₚ

Where:

    - V is the positional value.
    - n is the number of pieces still on the board for the target color (black or white).
    - M is the step-value matrix (as represented in the heatmap), with Mᵣ,ₚ denoting the value at row r and column c.
    - Rᵢ is the set of all squares (row, column) that the i-th piece could reach.
    - (r, c) are the row and column indices of the reachable squares by the i-th piece.
    
In plain English:
    
    - Calculate the value of all pieces on the board for the desired color by adding the value of the piece's current square to the sum of the values for all squares which the piece       could move to on the next move (in practice, this is difficult because of pawn captures, enemy pieces in the way, etc.)
    - Sum the value for each piece together to receive the positional evaluation on a points basis
