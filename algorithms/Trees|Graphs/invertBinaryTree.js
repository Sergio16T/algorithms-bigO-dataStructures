/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// n = number of nodes in the tree
// time complexity = O(n) since each element in the tree is only visited once
// space complexity = O(n) when we call a function recusively it holds memory in the stack and in worst case will hold h space where h is the height of the tree. h = O(n)
var invertTree = function(root) {
  if (root != null) {
    // swap children
    const temp = root.right;
    root.right = root.left;
    root.left = temp;

    // Invert Child trees
    invertTree(root.right);
    invertTree(root.left);
  }

  return root;

};

var _invertTree = function(root) {
  if (root == null) {
    return null
  }
  // swap children
  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  // Invert Child trees
  invertTree(root.right);
  invertTree(root.left);


  return root;

  // n = number of nodes in the tree
  // time complexity = O(n) since each element in the tree is only visited once
  // space complexity = O(n) when we call a function recusively it holds memory in the stack and in worst case will hold h space where h is the height of the tree. h = O(n)

};