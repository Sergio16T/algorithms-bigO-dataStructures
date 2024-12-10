/*
    * Preorder traversal visits the node in the order: Root -> Left -> Right
*/


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) { return; }
    result.push(node.value); // Visit the root
    traverse(node.left);     // Visit the left subtree
    traverse(node.right);    // Visit the right subtree
  }
  traverse(root);
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

console.log(preOrderTraversal(root)); // Output: [1, 2, 4, 5, 3, 6]
