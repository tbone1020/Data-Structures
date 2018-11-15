class Node {
  constructor(n) {
    this.value = n;
    this.left = null;
    this.right = null;
  }
}

BinaryTree.prototype.postOrderDFS = function() {
    /* Post Order DFS 
        
        Left, Right, Root
    */
  let postOrderDFS = [];
  const dfs = function(node) {
    if (node == null) return;

    dfs(node.left);
    dfs(node.right);
    postOrderDFS.push(node.value);
  }
  dfs(this.root);
  console.log(`post order DFS outputs ${postOrderDFS}`);
  return this;
}

BinaryTree.prototype.inOrderDFS = function() {
    /* In Order DFS 
        
        Left, Root, Right
    */
  let inOrder = [];
  const dfs = function(node) {
    if (node == null) return;

    dfs(node.left);
    inOrder.push(node.value);
    dfs(node.right);
  }
  dfs(this.root);
  console.log(`in order DFS outputs ${inOrder}`);
  return this;
}

BinaryTree.prototype.preOrderDFS = function() {
    /* Post Order DFS 
        
        Root, Left, Right
    */

  let preOrder = [];
  const dfs = function(node) {
    if (node == null) return;

    preOrder.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(this.root);
  console.log(`pre order DFS outputs ${preOrder}`);
  return this;
}

BinaryTree.prototype.BFS = function() {
  let bfsList = [];
  let queue = [];
  queue.push(this.root);

  while (queue.length) {
    let n = queue.shift();
    bfsList.push(n.value);
    if (n.left) {
      queue.push(n.left);
    }
    if (n.right) {
      queue.push(n.right);
    }
  }
  console.log(`The order of BFS is ${bfsList}`);
  return this;
}

BinaryTree.prototype.maxValue = function(){
    let n = this.root;
    while(n){
        if(n.right){
            n = n.right;
        } else {
            console.log(`The highest value is ${n.value}`);
            n = n.right;
        }
    }
    return this;
}

BinaryTree.prototype.minValue = function(){
    let n = this.root;
    while(n){
        if(n.left){
            n = n.left;
        } else {
            console.log(`The lowest value is ${n.value}`);
            n = n.left;
        }
    }
    return this;
}

BinaryTree.prototype.addNode = function(node) {
  if (!this.root) {
    this.root = new Node(node);
  } else {
    let next = this.root;
    while (next) {
      if (node > next.value) {
        if (next.right === null) {
          next.right = new Node(node);
          return this;
        } else {
          next = next.right;
        }
      } else {
        if (next.left === null) {
          next.left = new Node(node);
          return this;
        } else {
          next = next.left;
        }
      }
    }
  }
  return this;
}

function BinaryTree() {
  this.root = null;
}

let bst = new BinaryTree();
bst.addNode(5)
    .addNode(9)
    .addNode(3)
    .addNode(1)
    .addNode(6)
    .addNode(8)
    .addNode(19)
    .addNode(11)
    .addNode(14)
    .BFS()
    .preOrderDFS()
    .inOrderDFS()
    .postOrderDFS()
    .minValue()
    .maxValue();
