'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';

const bst = new BinarySearchTree();
bst.insert(new Node(10));
bst.insert(new Node(2));
bst.insert(new Node(12));
bst.insert(new Node(15));
bst.insert(new Node(7));
bst.insert(new Node(21));

describe('#BinarySearchTree', () => {
  test('should return BST', () => {
    console.log(bst);
    expect(bst.find(21)).toEqual(21);
  });
});
