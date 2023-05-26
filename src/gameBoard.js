// Create the game board
/* Function that crates 2d array for game board. 8x8 grid.
   Each square can be empty or occupied and has a position value.
   A1 is the bottom left corner, H8 is the upper right.
*/
const Spot = (position = null, taken = false) => {
  const spotObject = {
    position,
    taken,
  };
  return spotObject;
};

const columnLetters = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
};

const GameBoard = (sizeX, sizeY) => {
  // Create board array and initialize with position and taken values
  const board = [];
  for (let i = 0; i < sizeX; i += 1) {
    // For every board value create an array for that column's spots
    const column = [];
    board[i] = column;
    let position = `${columnLetters.i}`;
    for (let j = 0; j < sizeY; j += 1) {
      position += `${j + 1}`;
      column[j] = Spot(position, false);
    }
  }

  return board;
};

export default GameBoard;
