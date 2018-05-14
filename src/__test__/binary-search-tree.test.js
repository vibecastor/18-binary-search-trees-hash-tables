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

const rmvBst = new BinarySearchTree();
rmvBst.insert(new Node(10));
rmvBst.insert(new Node(5));
rmvBst.insert(new Node(15));
rmvBst.insert(new Node(3));
rmvBst.insert(new Node(7));
rmvBst.insert(new Node(20));
rmvBst.insert(new Node(4));
rmvBst.insert(new Node(6));
rmvBst.insert(new Node(9));
rmvBst.insert(new Node(17));
rmvBst.insert(new Node(25));
rmvBst.insert(new Node(22));


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
  describe('#remove', () => {
    test('remove function should return new rootnode value', () => {
      // expect(rmvBst.remove(4)).toBeNull();
      // expect(rmvBst.remove(25)).toEqual(22);
      rmvBst.insert(new Node(21));
      expect(rmvBst.remove(20)).toEqual(21);
    });
  });
});
