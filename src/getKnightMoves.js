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

const isMoveValid = (move, currentNode, board, visitedNodes) => {
  // "Do the move" to get end position
  const endPosition = [
    currentNode.position[0] + move[0],
    currentNode.position[1] + move[1],
  ];
  // Return null if to bottom or left of board
  if (endPosition[0] < 0 || endPosition[1] < 0) {
    return null;
  }
  // Return null if to top or right of board
  if (
    endPosition[0] > board.length - 1 ||
    endPosition[1] > board[0].length - 1
  ) {
    return null;
  }
  // Return null if node already visited
  const nodeToVisit = board[endPosition[0]][endPosition[1]];
  if (visitedNodes.includes(nodeToVisit)) {
    return null;
  }
  // Else return the valid move and add it to visited nodes
  visitedNodes.push(nodeToVisit);
  return endPosition;
};

const buildMoveTreeRecursively = (currentNode, board, visitedNodes) => {
  // Check that moves from position land invalid areas
  Object.keys(knightMoves).forEach((key) => {
    // If that move is valid, add a reference to it to current node and getKnightMoves from it
    const validatedMove = isMoveValid(
      knightMoves[key],
      currentNode,
      board,
      visitedNodes
    );
    console.log(
      `Checking move: ${knightMoves[key]}... Validated move: ${validatedMove}`
    );
    if (validatedMove) {
      const newChildNode = MoveNode(validatedMove);
      currentNode[key] = newChildNode;
      buildMoveTreeRecursively(newChildNode, board, visitedNodes);
    }
  });
};

const buildKnightMoveTree = (position, board) => {
  // Create root node that stores postion value
  const rootNode = MoveNode(position);
  // Create array to store visited positions
  const visitedNodes = [];
  console.log(`Building tree off root node:`);
  console.log(rootNode);
  buildMoveTreeRecursively(rootNode, board, visitedNodes);
  // Return root of tree
  return rootNode;
};

export default buildKnightMoveTree;
