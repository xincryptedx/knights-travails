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
console.log("Path from [1, 0] to [4,4]:");
window.path1 = bfsPath(window.myMoveTree, "position", [4, 4]);
console.log(window.path1);
console.log("Path from [1, 0] to [7, 7]:");
window.path2 = bfsPath(window.myMoveTree, "position", [7, 7]);
console.log(window.path2);
console.log("Path from [1, 0] to [7, 0]:");
window.path3 = bfsPath(window.myMoveTree, "position", [7, 0]);
console.log(window.path3);
