'use strict';

export default class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  } 

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode.value;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  remove(value) {
    if (!this.root) {
      return null;
    }
    return this._remove(this.root, value);
  }

  _remove(rootNode, value) {
    if (!rootNode) {
      return null;
    }
    const baseValue = rootNode.value;
    // let nodeToBeRemoved = null;
    if (rootNode.value === value) {
      // nodeToBeRemoved is a leaf
      if (!rootNode.left && !rootNode.right) {
        rootNode = null;
        return null;
      } else if (rootNode.left && rootNode.right) {
        // nodetoberemoved has two children
        if (baseValue <= rootNode.value) {     
          rootNode = (this._findMinRight(rootNode.right));
        } else {
          rootNode = (this._findMinLeft(rootNode.left));
        }
        return rootNode.value;
      } else if (rootNode.left || rootNode.right) {
      // nodeToBeRemoved has one child
        if (rootNode.left) {
          rootNode = rootNode.left;
        } else {
          rootNode = rootNode.right;
        }
        return rootNode.value;
      }
    } else if (rootNode.value < value) {
      return this._remove(rootNode.right, value);
    } else {
      return this._remove(rootNode.left, value);
    }
    return undefined;
  }
  
  _findMinRight(rootNode) {
    let successorNode = null;
    while (rootNode.left) {
      this._findMinRight(rootNode.left);
    }
    successorNode = rootNode;
    if (rootNode.right) {
      rootNode = rootNode.right;
    } 
    return successorNode;
  }

  _findMinLeft(rootNode) {
    let successorNode = null;
    while (rootNode.right) {
      this._findMinLeft(rootNode.right);
    }
    successorNode = rootNode;
    if (rootNode.left) {
      rootNode = rootNode.left;
    }
    return successorNode;
  }
}
