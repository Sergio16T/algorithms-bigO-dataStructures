
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log("Pre-order Traversal:", tree.preOrderTraversal()); // Output: [10, 5, 3, 7, 15, 13, 17]
console.log("In-order Traversal:", tree.inOrderTraversal());   // Output: [3, 5, 7, 10, 13, 15, 17]
console.log("Post-order Traversal:", tree.postOrderTraversal()); // Output: [3, 7, 5, 13, 17, 15, 10]

console.log("Search 7:", tree.search(7)); // Output: true
console.log("Search 20:", tree.search(20)); // Output: false
