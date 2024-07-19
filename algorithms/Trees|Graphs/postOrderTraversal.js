/**
* Postorder traversal visits the node in the order: Left -> Right -> Root
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);     // Visit the left subtree
    traverse(node.right);    // Visit the right subtree
    result.push(node.value); // Visit the root
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
console.log(postOrderTraversal(root)); // Output: [4, 5, 2, 6, 3, 1]
