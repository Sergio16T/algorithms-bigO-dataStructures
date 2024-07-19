class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfsTraversal(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length > 0) {

    const node = queue.shift(); // Dequeue the front node
    result.push(node.value);

    // Enqueue left child
    if (node.left) {
      queue.push(node.left);
    }

    // Enqueue right child
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

// Example usage:
// Creating a sample tree:
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(bfsTraversal(root)); // Output: [1, 2, 3, 4, 5, 6]
