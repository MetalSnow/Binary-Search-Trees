import Tree from './tree.js';

const tree = new Tree();

tree.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);

tree.insert(10);

tree.deleteItem(5);

console.log(tree.find(6));

// LevelOrder Using iteration
tree.levelOrder((node) => {
  node.data += ' Loop -';
});

// LevelOrder Using Recurtion
tree.levelOrderRec((node) => {
  node.data += ' Rec';
});

tree.preOrder((node) => console.log(node.data));
console.log('########');
tree.inOrder((node) => console.log(node.data));
console.log('########');
tree.postOrder((node) => console.log(node.data));

console.log(tree.height(tree.root.right));
console.log(tree.depth(tree.root.left.right.right));

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(tree.root);
