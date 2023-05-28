# Knight's Trevails

This repository contains code for solving the problem of determining the shortest path a Knight can take from a given spot on a game board to another given spot.

## Implementation

The solution provided in this repository is based on a breadth-first search (BFS) algorithm to explore all possible moves and find the shortest path. The implementation consists of the following components:

- `gameBoard.js`: Builds a game board of arbitrary size from 2x2 - 100x100 with a default size of 8x8.
- `getKnightMoves.js`: Builds a tree structure representing all possible moves and paths from a given starting position.
- `bfsPath.js`: Performs a breadth-first search to find the shortest path from the starting position to a target position.
