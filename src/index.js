import "./style.css";
import GameBoard from "./gameBoard";
import KnightMoves from "./getKnightMoves";

// Use BFS to find shortest path to target while tracking explored nodes (queue system needed)
/* -Create a queue to store the positions to be explored.
   -Create a separate 2D array to keep track of the visited positions.
   -Enqueue the starting position to the queue and mark it as visited.
   -While the queue is not empty:
   -Dequeue a position from the queue.
   -Generate all possible moves from the current position.
   -For each valid move:
   -If the move is the ending position, stop the search and return the path.
   -If the move has not been visited:
   -Enqueue the move to the queue.
   -Mark the move as visited.
   -Update the path information for the move.
   -If the queue becomes empty and the ending position has not been found, there is no valid path.
*/
// Output the shortest path
/* Output array of all positions visited along shortest path
 */

// Testing in browser stuff
window.createBoard = GameBoard;
window.myBoard = GameBoard();

window.getMoveTree = KnightMoves;
