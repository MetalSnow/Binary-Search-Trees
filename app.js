import Tree from './tree.js';
import generateArray from './generateArray.js';
import { prettyPrint } from './prittyPrint.js';

const tree = new Tree();

const array = generateArray();

tree.buildTree(array);

console.log(tree.isBalanced()); // true

// LevelOrder Using iteration
tree.levelOrder((node) => console.log(node.data));
console.log('########');
// LevelOrder Using Recurtion
tree.levelOrderRec((node) => console.log(node.data));
console.log('########');
tree.preOrder((node) => console.log(node.data));
console.log('########');
tree.inOrder((node) => console.log(node.data));
console.log('########');
tree.postOrder((node) => console.log(node.data));

// Unbalancing the tree by adding several numbers > 100
tree.insert(102);
tree.insert(142);
tree.insert(209);

// print tree
prettyPrint(tree.root);

console.log(tree.isBalanced()); // false

tree.rebalance();

// print tree
prettyPrint(tree.root);

// LevelOrder Using iteration
tree.levelOrder((node) => console.log(node.data));
console.log('########');
// LevelOrder Using Recurtion
tree.levelOrderRec((node) => console.log(node.data));
console.log('########');
tree.preOrder((node) => console.log(node.data));
console.log('########');
tree.inOrder((node) => console.log(node.data));
console.log('########');
tree.postOrder((node) => console.log(node.data));
