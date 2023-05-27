# Knight's Tour

This repository contains code for solving the Knight's Tour problem, which involves finding a sequence of moves for a knight on a chessboard to visit every square exactly once.

## Problem Description

The Knight's Tour problem is a classic puzzle in chess. The task is to find a sequence of moves for a knight on an `n` x `n` chessboard such that the knight visits every square exactly once.

## Implementation

The solution provided in this repository is based on a breadth-first search (BFS) algorithm to explore all possible moves and find the shortest path. The implementation consists of the following components:

- `knightMoves.js`: Defines the possible moves a knight can make on the chessboard.
- `MoveNode.js`: Represents a node in the move tree.
- `buildKnightMoveTree.js`: Builds a tree structure representing all possible moves and paths from a given starting position.
- `bfsPath.js`: Performs a breadth-first search to find the shortest path from the starting position to a target position.
