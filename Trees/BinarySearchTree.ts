namespace BinarySearchTree {

  export class Branch {
    public value: number;
    public left: Branch;
    public right: Branch;

    constructor(n: number) {
      this.value = n;
      this.left = null;
      this.right = null;
    }
  }

  export class BinaryTree {
    public root: Branch;

    constructor() {
      this.root = null;
    }

    public preOrderDFS(): number[] {
      const preOrder: number[] = []; // List of values in preorder

      const dfs = (node: Branch) => {
        if (node == null) {return; }
        preOrder.push(node.value);
        dfs(node.left);
        dfs(node.right);
      };
      dfs(this.root);

      return preOrder;
    }

    public inOrderDFS(): number[] {
      const inOrder: number[] = []; // List of values in order
      const dfs = (node: Branch) => {
        if (node == null) {return; }
        dfs(node.left);
        inOrder.push(node.value);
        dfs(node.right);
      };
      dfs(this.root);
      return inOrder;
    }

    public postOrderDFS(): number[] {
      const postOrderDFS: number[] = []; // List of values in post order
      const dfs = (node: Branch) => {
        if (node == null) {return; }
        dfs(node.left);
        dfs(node.right);
        postOrderDFS.push(node.value);
      };

      dfs(this.root);
      return postOrderDFS;
    }

    public BFS(): number[] {
      const bfsList: number[] = [];
      const queue: Branch[] = [];
      queue.push(this.root);

      while (queue.length) {
        const n = queue.shift();
        bfsList.push(n.value);

        // Push the next nodes of the tree to the queue
        if (n.left) {
          queue.push(n.left);
        }
        if (n.right) {
          queue.push(n.right);
        }
      }
      return bfsList;
    }

    public minValue(): number {
      let n = this.root;

      while (n) {
        if (n.left) {
          n = n.left;
        } else {
          return n.value;
        }
      }
    }

    public maxValue(): number {
      let n = this.root;
      while (n) {
        if (n.right) {
          n = n.right;
        } else {
          return n.value;
        }
      }
    }

    public addNode(leaf: number): this {
      if (!this.root) {
        this.root = new Branch(leaf);
      } else {
        let next = this.root;
        while (next) {
          if (leaf > next.value) {
            if (next.right === null) {
              next.right = new Branch(leaf);
              return this;
            } else {
              next = next.right;
            }
          } else {
            if (next.left === null) {
              next.left = new Branch(leaf);
              return this;
            } else {
              next = next.left;
            }
          }
        }
      }
      return this; // Allows function chaining
    }
  }
}

const bst = new BinarySearchTree.BinaryTree()
  .addNode(5)
  .addNode(9)
  .addNode(3)
  .addNode(1)
  .addNode(6)
  .addNode(8)
  .addNode(19)
  .addNode(11)
  .addNode(14);

bst.minValue(); // Outputs 1
bst.maxValue(); // Outputs 19
bst.preOrderDFS(); // Outputs [5, 3, 1, 9, 6, 8, 19, 11, 14]
bst.inOrderDFS(); // Outputs [1, 3, 5, 6, 8, 9, 11, 14, 19]
bst.postOrderDFS(); // Outputs [1, 3, 8, 6, 14, 11, 19, 9, 5]
bst.BFS(); // Outputs [5, 3, 9, 1, 6, 19, 8, 11, 14]
