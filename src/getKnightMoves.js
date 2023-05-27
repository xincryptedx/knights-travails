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

const isMoveValid = (move, position, board) => {
  // "Do the move" to get end position
  const endPosition = [position[0] + move[0], position[1] + move[1]];
  // Return false if to bottom or left of board
  if (endPosition[0] < 0 || endPosition[1] < 0) {
    return false;
  }
  // Return false if to top or right of board
  if (
    endPosition[0] > board.length - 1 ||
    endPosition[1] > board[0].length - 1
  ) {
    return false;
  }
  // Else return true
  return true;
};

const buildMoveTreeRecursively = (currentNode, board) => {
  // Check that moves from position land invalid areas
  // If that move is valid, add a reference to it to current node and getKnightMoves from it
};

const buildKnightMoveTree = (position, board) => {
  // Create root node that stores postion value
  const rootNode = MoveNode(position);
  buildMoveTreeRecursively(rootNode, board);
  // Return root of tree
  return rootNode;
};
