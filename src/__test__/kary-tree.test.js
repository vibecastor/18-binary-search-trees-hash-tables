'use strict';

import KAryNode from '../lib/kary-node';
import KAryTree from '../lib/kary-tree';

describe('kary-tree.js tests', () => {
  const one = new KAryNode(1);
  one.appendChild(2);
  one.appendChild(3);
  one.appendChild(4);
  one.children[1].appendChild(5);
  one.children[1].appendChild(6);
  one.children[1].appendChild(7);
  one.children[1].children[1].appendChild(8);
  const testTree = new KAryTree(one);
  const falseTree = new KAryTree();
  describe('#find', () => {
    test('should return correct value in input', () => {
      expect(testTree.find(6)).toEqual(6);
      expect(testTree.find(2)).toEqual(2);
      expect(testTree.find(1)).toEqual(1);
    });
    test('should return null if no value exists', () => {
      expect(testTree.find(13)).toBeNull();
      expect(falseTree.find(1)).toBeNull();
    });
  });
  describe('#toString', () => {
    test('should return string in traversal order', () => {
      expect(testTree.toString()).toEqual('12345678');
    });
    test('should return null if no tree is present', () => {
      expect(falseTree.toString()).toBeNull();
    });
  });
});
