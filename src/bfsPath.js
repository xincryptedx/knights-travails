// Helper method for comparing array values
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

const bfsPath = (root, propName, targetValue) => {
  // Valiate root
  if (!root || typeof root !== "object") return undefined;
  // Create a queue and add the root node and path so far, which is just the root node's property value
  const q = [{ node: root, path: "" }];
  // Search through the nodes
  while (q.length > 0) {
    // Dequeue the next item on the queue for processing
    const qItem = q.shift();
    const { node } = qItem;
    const { path } = qItem;
    // Get the children of the first node in q
    Object.keys(node).forEach((key) => {
      if (key !== propName) {
        // If key is for a child node, add it to q and add to its path
        q.push({
          node: node[key],
          path: !path
            ? `[${node[propName][0]}, ${node[propName][1]}]`
            : `${path}, [${node[propName][0]}, ${node[propName][1]}]`,
        });
      }
    });
    // If the target value is found at the node, return visited nodes path
    if (arraysContainSameElements(node[propName], targetValue)) {
      return `${path}, [${node[propName][0]}, ${node[propName][1]}]`;
    }
  }
  return null;
};

export default bfsPath;
