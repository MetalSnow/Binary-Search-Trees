import node from './createNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let tmp = this.head;

    if (tmp === null) {
      this.head = new node(value);
      this.size += 1;
      return;
    }

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    tmp.next = new node(value);
    this.size += 1;
  }

  prepend(value) {
    this.head = new node(value, this.head);
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let tmp = this.head;

    if (tmp.next === null) return tmp;

    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    return tmp;
  }

  at(index) {
    let tmp = this.head;

    if (index === -1) return this.tail();
    if (index >= this.size) return 'null';

    for (let i = 0; i <= index; i++) {
      if (i === index) return tmp;
      tmp = tmp.next;
    }
  }

  pop() {
    let current = this.head;
    let prev;

    if (current === null) return 'List is empty!';
    if (current.next === null) {
      this.head = null;
      this.size -= 1;
      return;
    }

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    prev.next = null;

    this.size -= 1;
    return current;
  }

  contains(value) {
    let tmp = this.head;

    for (let i = 0; i < this.size; i++) {
      if (tmp.value === value) return true;
      tmp = tmp.next;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;

    for (let i = 0; i < this.size; i++) {
      if (tmp.value === value) return i;
      tmp = tmp.next;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let string = `( ${tmp.value} )`;
    while (tmp.next) {
      tmp = tmp.next;
      string += ` -> ( ${tmp.value} )`;
    }
    string += ` -> ( ${tmp.next} )`;

    return string;
  }

  insertAt(value, index) {
    if (index >= this.size) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let prev;

    for (let i = 1; i <= this.size; i++) {
      prev = current;
      current = current.next;

      if (index === i) {
        prev.next = new node(value, current);
        this.size += 1;
        return;
      }
    }
  }

  removeAt(index) {
    let current = this.head;
    let prev;

    if (index >= this.size) return;

    if (index === -1) {
      this.pop();
      return;
    }

    if (index === 0) {
      this.head = current.next;
      this.size -= 1;
      return;
    }

    for (let i = 1; i <= this.size; i++) {
      prev = current;
      current = current.next;

      if (index === i) {
        prev.next = current.next;
        this.size -= 1;
        return;
      }
    }
  }
}
