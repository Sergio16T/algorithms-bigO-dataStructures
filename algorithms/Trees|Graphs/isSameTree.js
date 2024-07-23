/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const p_values = BFSTraversal(p);
  const q_values = BFSTraversal(q);
  if (p_values.length !== q_values.length) {
    return false;
  }
  for (let i = 0; i < p_values.length; i++) {
    if (q_values[i] !== p_values[i]) {
      return false;
    }
  }
  return true;
};

const BFSTraversal = function(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    // now we need to push left and right nodes to the queue

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
      if (!node.left) {
        result.push(null);
      }
    }
  }
  return result;
}

/*

BFSTraversal Function Time & Space Complexity Analysis

BFS Traversal: Each node in the tree is processed once, and each node is enqueued and dequeued once.

Queue Operations: Enqueue and dequeue operations for each node are constant time operations.
Result Array: Appending to the result array is constant time.
For a tree with n nodes, the time complexity is:

Traversal Time:
𝑂(𝑛) (each node is visited once).
isSameTree Function
Two BFS Traversals: Each BFS traversal takes 𝑂(𝑛) time for trees p and q.
Comparing Arrays: The comparison of the two arrays takes 𝑂(𝑛) time

Combining these steps:

Total Time Complexity:  𝑂(𝑛) + 𝑂(𝑛) + 𝑂(𝑛) = O(n)


Space Complexity
BFSTraversal Function
Queue Space: The maximum size of the queue is proportional to the maximum width of the tree, which can be
𝑂(𝑛) in the worst case.
Result Array: The result array stores all node values and null placeholders, which is 𝑂(𝑛)

For a tree with n nodes, the space complexity is:

Queue Space: 𝑂(𝑛)
O(n) (in the worst case, the queue contains all nodes).
Result Array: 𝑂(𝑛) (stores node values).
isSameTree Function Two BFS Traversals: Each BFS traversal uses 𝑂(𝑛) space for the queue and result array.
Comparison Arrays: The space for the two arrays being compared is 𝑂(𝑛)

Combining these steps:

Total Space Complexity: 𝑂(𝑛) + 𝑂(𝑛) = O(n)

Summary
Time Complexity: 𝑂(𝑛) for both traversal and comparison.
Space Complexity: 𝑂(𝑛)for storing nodes in the queue and result arrays.
*/