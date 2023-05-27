const bfs = (root, propName, targetValue) => {
  // Valiate root
  if (!root || typeof root !== "object") return undefined;
  // Create a queue and add the root node
  const q = [root];
  // Search through the nodes
  while (q.length > 0) {
    // Get the children of the first object in q
    Object.keys(q[0]).forEach((key) => {
      if (key !== "position") {
        // If key is for a child node, add it to queue
        q.push(q[0][key]);
      }
    });
    // If the target value is found at the node, return that node
    if (q[0][targetValue] === targetValue) {
      return q[0];
    }
    // Remove the first item in the queue
    q.shift();
  }
  return null;
};

export default bfs;
