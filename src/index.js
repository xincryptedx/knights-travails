import "./style.css";
import GameBoard from "./gameBoard";
import KnightMoves from "./getKnightMoves";
import bfsPath from "./bfsPath";

// Output the shortest path
/* Output array of all positions visited along shortest path
 */

// Testing in browser stuff
function printTreeStructure(rootNode, indent = "") {
  // Print the current node
  // eslint-disable-next-line no-console
  console.log(`${indent}|-- ${rootNode.position}`);

  // Get the keys of the node excluding 'position'
  const childKeys = Object.keys(rootNode).filter((key) => key !== "position");

  // Recursively print the child nodes
  childKeys.forEach((key, index) => {
    const child = rootNode[key];
    const isLastChild = index === childKeys.length - 1;
    const childIndent = indent + (isLastChild ? "    " : "|   ");
    printTreeStructure(child, childIndent);
  });
}

window.prettyPrint = printTreeStructure;

window.createBoard = GameBoard;
window.myBoard = GameBoard();

window.getMoveTree = KnightMoves;
window.myMoveTree = KnightMoves([1, 0], window.myBoard);

window.bfs = bfsPath;
