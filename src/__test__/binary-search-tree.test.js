'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';

const bst = new BinarySearchTree();
const badBst = new BinarySearchTree();
bst.insert(new Node(10));
bst.insert(new Node(2));
bst.insert(new Node(12));
bst.insert(new Node(15));
bst.insert(new Node(7));
bst.insert(new Node(21));


describe('#BinarySearchTree', () => {
  describe('#find', () => {
    test('find should return correct node value', () => {
      expect(bst.find(21)).toEqual(21);
      expect(bst.find(15)).toEqual(15);
      expect(bst.find(1)).toBeNull();
    });
    test('should test null for no root node', () => {
      expect(badBst.find(1)).toBeNull();
    });
  });
});
