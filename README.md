A new value-based way of evaluating a chess position.

Modeling the chess board as a step-value matrix (visualized as a heatmap in Visualizations.xlsx) prioritizes centrality of pieces, a key tenet of most effective chess positions. This approach replaces the traditional 1, 3, 5, 9 valuation of chess pieces by acknowledging pieces' inherent movement capabilities, and aims to summarize chess positions through movement capabilities. The approach rewards mobility (such as uncontested files) and penalizes cumbersome groupings.

I am not a master chess player, nor a mathematician. I acknowledge this approach is likely fundamentally flawed from both chess and mathematical perspectives. This is a purely exploratory exercise. Similarly, implementation.py does not implement the algorithm in its entirety. Instead, this file is a mere glimpse at the algo in practice, without accounting for piece-specific movement rules.
