import node from './createNode.js';

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = root;
  }

  buildTree(array) {
    let sortedArr = array.sort().filter((item, pos, arr) => {
      return !pos || item != ary[pos - 1];
    });
  }
}
