import "./style.css";

// Create the game board
/* Function that crates 2d array for game board. 8x8 grid.
   Each square can be empty or occupied and has a position value.
   A1 is the bottom left corner, H8 is the upper right.
*/
const Spot = () => {
  const spotObject = {
    position: null,
    taken: false,
  };
  return spotObject;
};

const GameBoard = (sizeX, sizeY) => {
  // Create board array and initialize with position and taken values
  const board = [];
  for (let i = 0; i < sizeX; i += 1) {
    // For every board value create an array for that column's spots
    board[i] = [];
  }

  return board;
};
// Generate possible moves array
/* Function that takes knight position as input and returns an array of 
   all possible valid moves for the knight from that position. Ensure that
   the moves stay within the bounds of the chessboard. You can use the knight's 
   movement rules to calculate the new positions. 
*/
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
