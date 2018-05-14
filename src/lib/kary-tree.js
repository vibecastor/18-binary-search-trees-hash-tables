'use strict';

import Queue from 'queue-fifo';
import Stack from 'stack-lifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);
    console.log(this);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      console.log(`Visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    console.log(this);
    const queue = new Queue();
    if (rootNode.value === value) {
      return rootNode.value;
    }
    queue.enqueue(rootNode);
    let foundValue = null;

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].value === value) {
          foundValue = currentNode.children[i].value;
        }
        queue.enqueue(currentNode.children[i]);
      }
    }
    return foundValue;
  }

  toString() {
    if (!this.root) {
      return null;
    }
    return this._toString(this.root);
  }

  _toString(rootNode) {
    console.log(this);
    const queue = new Queue();
    queue.enqueue(rootNode);
    let printString = `${rootNode.value}`;

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      for (let i = 0; i < currentNode.children.length; i++) {
        printString += currentNode.children[i].value;
        queue.enqueue(currentNode.children[i]);
      }
    }
    return printString;
  }

  toArray() {
    if (!this.root) {
      return null;
    }
    return this._toArray(this.root);
  }

  _toArray(rootNode) {
    console.log(this);
    const array = [];
    const queue = new Queue();
    const stack = new Stack();

    queue.enqueue(rootNode);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
      stack.push(currentNode.value);
    }
    while (!stack.isEmpty()) {
      array.push(stack.pop());
    }
    return array;
  }
}
