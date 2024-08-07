import Node from './createNode.js';

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }

  sortedArrayToBST(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);

    return node;
  }

  buildTree(array) {
    let sortedArr = array
      .sort((a, b) => a - b)
      .filter((item, pos, arr) => {
        return !pos || item != arr[pos - 1];
      });

    let end = sortedArr.length - 1;

    this.root = this.sortedArrayToBST(sortedArr, 0, end);

    return this.root;
  }

  insertRec(value, root) {
    if (!root) {
      root = new Node(value);
      return root;
    }

    if (root.data < value) {
      root.right = this.insertRec(value, root.right);
    } else if (root.data > value) {
      root.left = this.insertRec(value, root.left);
    }

    return root;
  }

  insert(value) {
    this.root = this.insertRec(value, this.root);
  }

  deleteItem(value, root = this.root) {
    if (!root) {
      return root;
    }

    if (root.data < value) {
      root.right = this.deleteItem(value, root.right);
    } else if (root.data > value) {
      root.left = this.deleteItem(value, root.left);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      root.data = this.lastValue(root.right);

      root.right = this.deleteItem(root.data, root.right);
    }

    return root;
  }

  lastValue(node) {
    let lValue = node.data;

    while (node.left !== null) {
      lValue = node.left.data;
      node = node.left;
    }

    return lValue;
  }

  find(value, root = this.root) {
    if (!root) return;

    if (root.data === value) {
      return root;
    }

    let right = this.find(value, root.right);
    let left = this.find(value, root.left);

    if (right && right.data === value) return right;
    if (left && left.data === value) return left;

    return 'value not found';
  }

  // LevelOrder Using iteration
  levelOrder(callback) {
    if (typeof callback !== 'function') {
      throw new Error(`${typeof callback} "${callback}" is not a function`);
    }

    if (!this.root) return;

    let qeueu = [];

    qeueu.push(this.root);

    while (qeueu.length !== 0) {
      let curr = qeueu[0];

      callback(curr);

      if (curr.left !== null) {
        qeueu.push(curr.left);
      }

      if (curr.right !== null) {
        qeueu.push(curr.right);
      }

      qeueu.shift();
    }
  }

  // LevelOrder Using Recurtion
  levelOrderRec(callback, qeueu = [this.root]) {
    if (typeof callback !== 'function') {
      throw new Error(`${typeof callback} "${callback}" is not a function`);
    }

    if (qeueu.length === 0) return;

    let node = qeueu.shift();

    if (node.left !== null) {
      qeueu.push(node.left);
    }

    if (node.right !== null) {
      qeueu.push(node.right);
    }

    callback(node);

    this.levelOrderRec(callback, qeueu);
  }

  preOrder(callback, root = this.root) {
    if (typeof callback !== 'function') {
      throw new Error(`${typeof callback} "${callback}" is not a function`);
    }

    if (!root) return;

    callback(root);
    this.preOrder(callback, root.left);
    this.preOrder(callback, root.right);
  }

  inOrder(callback, root = this.root) {
    if (typeof callback !== 'function') {
      throw new Error(`${typeof callback} "${callback}" is not a function`);
    }

    if (!root) return;

    this.inOrder(callback, root.left);
    callback(root);
    this.inOrder(callback, root.right);
  }

  postOrder(callback, root = this.root) {
    if (typeof callback !== 'function') {
      throw new Error(`${typeof callback} "${callback}" is not a function`);
    }

    if (!root) return;

    this.postOrder(callback, root.left);
    this.postOrder(callback, root.right);
    callback(root);
  }

  height(node) {
    if (!node) return -1;

    let left = this.height(node.left) + 1;
    let right = this.height(node.right) + 1;

    if (left > right) {
      return left;
    }

    return right;
  }

  depth(node, root = this.root) {
    if (!root) return;
    if (root === node) return 0;

    let left = this.depth(node, root.left) + 1;
    let right = this.depth(node, root.right) + 1;

    if (!isNaN(left)) {
      return left;
    }

    return right;
  }

  isBalanced() {
    let heightLeft = this.height(this.root.left);
    let heightRight = this.height(this.root.right);

    let diff = heightLeft - heightRight;

    if (diff === 1 || diff === -1 || diff === 0) {
      return true;
    }

    return false;
  }

  rebalance() {
    let arr = [];

    this.levelOrder((node) => {
      arr.push(node.data);
    });

    this.buildTree(arr);
  }
}
