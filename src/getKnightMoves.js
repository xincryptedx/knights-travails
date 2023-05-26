// Generate possible moves array
/* Function that takes knight position as input and returns an array of 
   all possible valid moves for the knight from that position. Ensure that
   the moves stay within the bounds of the chessboard. You can use the knight's 
   movement rules to calculate the new positions. 
*/
// Array of moves a knight can make
const knightMoves = {
  right1up2: [1, 2],
  left1up2: [-1, 2],
  right1down2: [1, -2],
  left1down2: [-1, -2],
  right2up1: [2, 1],
  left2up1: [-2, 1],
  right2down1: [2, -1],
  left2down1: [-2, -1],
};

const MoveNode = (position = null) => {
  const newMove = {
    position,
  };
  return newMove;
};

const getKnightMovesInternal = (currentNode, board) => {
  // Check that moves from position land invalid areas
  // If that move is valid, add a reference to it to current node and getKnightMoves from it
};

const getKnightMoves = (position, board) => {
  // Create root node that stores postion value
  const rootNode = MoveNode(position);
  getKnightMovesInternal(rootNode, board);
  // Return root of tree
  return rootNode;
};