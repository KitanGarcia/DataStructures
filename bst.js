/****Binary Search Trees****
  functions: add, remove, findMin, findMax, find, isPresent
  Can only have 2 branches for each node
  Branches on left are <= parent; branches on right are >= parent.
  On average, operations can skip half the tree -> look up, insertion, deletion takes O(log(n))
*/


class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null)
    {
      this.root = new Node(data);
      return;
    }
    else
    {
      const searchTree = function(node)
      {
        if (data < node.data)
        {
          if (node.left === null)
          {
            node.left = new Node(data)
            return;
          }
          else if (node.left !== null)
          {
            return searchTree(node.left)
	  			}
        }
        else if (data > node.data)
        {
          if (node.right === null)
          {
            node.right = new Node(data);
            return;
          }
          else if (node.right !== null)
          {
            return searchTree(node.right);
          }
        }
        else
        {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null)
    {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null)
    {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data)
    { 
      if (data < current.data)
      {
        current = current.left;
      }
      else
      {
        current = current.right;
      }
      if (current === null)
      {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current)
    {
      if (data === current.data)
      {
        return true;
      }
      if (data < current.data) 
      {
        current = current.left;
      }
      else
      {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null)
      {
        return null;
      }
      if (data == node.data)
      {
        //node has no children
        if (node.left == null && node.right == null)
        {
          return null;
        }
        //node has no left child
        if (node.left == null)
        {
          return node.right;
        }
        //node has no right child
        if (node.right == null)
        {
          return node.left;
        }
        //node has two children
        var tempNode = node.right;
        while (tempNode.left !== null)
        {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      else if (data < node.data)
      {
        node.left = removeNode(node.left, data);
        return node;
      }
      else
      {
        node.right = removeNode(node.right, data)
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() -1);
  }

  findMinHeight(node = this.root) { //if no node is passed in, use root
    if (node == null)
    {
      return -1;
    }
    let left = findMinHeight(node.left);
    let right = findMinHeight(node.right);
    if (left < right)
    {
      return left + 1;
    }
    else
    {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) { //if no node is passed in, use root
    if (node == null)
    {
      return -1;
    }
    let left = findMaxHeight(node.left);
    let right = findMaxHeight(node.right);
    if (left > right)
    {
      return left + 1;
    }
    else
    {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root == null)
    {
      return null;
    }
    else
    {
      let result = new Array();
      function traverseInOrder(node.left)
      {
        node.left && traverseInOrder(node.left); // if node.left is true, call function
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }


  preOrder() {
    if (this.root == null)
    {
      return null;
    }
    else
    {
      let result = new Array();
      function traversePreOrder(node.left)
      {
        result.push(node.data);
        node.left && traversePreOrder(node.left); // if node.left is true, call function
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null)
    {
      return null;
    }
    else
    {
      let result = new Array();
      function traversePostOrder(node.left)
      {
        node.left && traversePostOrder(node.left); // if node.left is true, call function
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null)
    {
      Q.push(this.root);
      
    }
    else
    {
    }

  }

}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));


