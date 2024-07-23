/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
  * Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  * Time Complexity: O(n) we visit each node exactly once
  * Space Complexity: In the worst case we have a completely unbalanced tree O(n), in the best case we have a balanced tree O(log n)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const lh = maxDepth(root.left);
  const rh = maxDepth(root.right);

  return Math.max(lh, rh) + 1;
}

// Example usage:
// Creating a sample tree:
//     3
//    / \
//   9   20
//       / \
//     15   17

// With recursion eventually this will reach base case at bottom of tree and return 0 which is what sets the stage for us to then add 1.
// Then with each call up the stack we start to add + 1 to the depth until we reach our final result at top root node.

// In other words: recursion will always continue to call until we reach base case and then this will trickle up adding 1 until we reach the root node. where get the final return 2 + 1;