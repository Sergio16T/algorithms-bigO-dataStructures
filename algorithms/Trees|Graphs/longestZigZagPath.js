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
 * @return {number}
 */
/*
 recursion
 while node.left or node.right call a function to traverse right or left depending on the zig zag
 keep track of the longest zig zag

 Runtime O(n)
 Space O(n)

 Explanation:
 we visit each node at most 1 time so run time is O(n)
 pathLength variable takes up O(1) constant spacem however we have the call stack as well for DFS and so we have up to O(n) calls in call stack
 */
var longestZigZag = function(root) {
  let pathLength = 0;
  const dfs = function (node, goLeft, steps) {
    if (node) {
      pathLength = Math.max(pathLength, steps);

      if (goLeft) {
        dfs(node.left, false, steps + 1); // steps is incremented
        dfs(node.right, true, 1); // otherwise start over with current node visited (part of path) so steps = 1
      } else {
        dfs(node.left, false, 1);  // otherwise start over with current node visited (part of path) so steps = 1
        dfs(node.right, true, steps + 1); // steps is incremented
      }
    }
  }

  dfs(root, false, 0);
  dfs(root, true, 0);

  return pathLength;
}


