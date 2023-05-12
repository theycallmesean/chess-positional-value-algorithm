V = ∑ (i=1 to n) ∑ (r, c) ∈ Rᵢ (Mᵣ,ₚ + Cₑ)

Where:

    - V is the positional value.
    - n is the number of pieces still on the board for the target color (black or white).
    - M is the step-value matrix (as represented in the heatmap), with Mᵣ,ₚ denoting the value at row r and column c.
    - Rᵢ is the set of all squares (row, column) that the i-th piece could reach.
    - (r, c) are the row and column indices of the reachable squares by the i-th piece.
    - Cₑ is the positional value of the enemy piece on square (r, c) if it can be captured, including the value of the square itself, and excluding the value contribution of the given piece, and 0 otherwise.