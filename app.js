import LinkedList from './linkedList.js';

const list = new LinkedList();

list.append('Morocco');
list.append('China');
list.append('Germany');
list.append('Japan');
list.append('Canada');

list.insertAt('Spain', 3);
list.removeAt(3);

console.log(list.getHead());
console.log(list.getSize());
console.log(list.toString());
