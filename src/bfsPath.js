const arraysContainSameElements = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const bfsPath = (root, propName, targetValue, visitedNodes = [root]) => {
  // Valiate root
  if (!root || typeof root !== "object") return undefined;
  // Create a queue and add the root node
  const q = [root];
  // Search through the nodes
  while (q.length > 0) {
    // Get the children of the first object in q
    Object.keys(q[0]).forEach((key) => {
      if (key !== propName) {
        // If key is for a child node, add it to queue and visited nodes
        q.push(q[0][key]);
        visitedNodes.push(q[0][key]);
      }
    });
    // If the target value is found at the node, return that node
    if (arraysContainSameElements(q[0][propName], targetValue)) {
      return q[0];
    }
    // Remove the first item in the queue
    q.shift();
  }
  return null;
};

export default bfsPath;
