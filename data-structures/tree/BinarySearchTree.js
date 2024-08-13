/*
A Binary search tree is a tree that follows some order to arrange the elements, whereas the binary tree does not follow any order.

In a Binary search tree, the value of the left node must be smaller than the parent node, and the value of the right node must be greater than the parent node.
This property makes it efficient for searching, insertion, and deletion operations

*/


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this._searchNode(node.left, value);
    } else if (value > node.value) {
      return this._searchNode(node.right, value);
    } else {
      return true;
    }
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children
      // Get the inorder successor (smallest in the right subtree)
      node.value = this._findMinNode(node.right).value;
      node.right = this._removeNode(node.right, node.value);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  preOrderTraversal() {
    const result = [];
    this._preOrderTraversal(this.root, result);
    return result;
  }

  _preOrderTraversal(node, result) {
    if (node !== null) {
      result.push(node.value);
      this._preOrderTraversal(node.left, result);
      this._preOrderTraversal(node.right, result);
    }
  }

  inOrderTraversal() {
    const result = [];
    this._inOrderTraversal(this.root, result);
    return result;
  }

  _inOrderTraversal(node, result) {
    if (node !== null) {
      this._inOrderTraversal(node.left, result);
      result.push(node.value);
      this._inOrderTraversal(node.right, result);
    }
  }

  postOrderTraversal() {
    const result = [];
    this._postOrderTraversal(this.root, result);
    return result;
  }

  _postOrderTraversal(node, result) {
    if (node !== null) {
      this._postOrderTraversal(node.left, result);
      this._postOrderTraversal(node.right, result);
      result.push(node.value);
    }
  }
}

// Example usage:
//       10
//      /  \
//     5    15
//    / \   / \
//   3   7 13  17
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("Pre-order Traversal:", bst.preOrderTraversal()); // Output: [10, 5, 3, 7, 15, 13, 17]
console.log("In-order Traversal:", bst.inOrderTraversal());   // Output: [3, 5, 7, 10, 13, 15, 17]
console.log("Post-order Traversal:", bst.postOrderTraversal()); // Output: [3, 7, 5, 13, 17, 15, 10]

console.log("Search 7:", bst.search(7)); // Output: true
console.log("Search 20:", bst.search(20)); // Output: false

bst.remove(15);
console.log("In-order Traversal after removing 15:", bst.inOrderTraversal()); // Output: [3, 5, 7, 10, 13, 17]

