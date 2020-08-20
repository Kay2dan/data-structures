// Binary Search Tree:
// Breath-first search
// This is an implementation of a tree, which may not be balanced
// duplicates are allowed

class BST {
  constructor() {
    this.tree = [];
  }

  addNode(val) {
    const { tree } = this;
    if (tree.length === 0) {
      tree.push(val);
      return;
    }
    const curIndex = this.traverseTree(val, "lastPosition");
    tree[curIndex] = val;
    console.log(
      "updated tree:",
      this.tree,
      " & its length: ",
      this.tree.length
    );
  }

  traverseTree(val, queryType = "lastPosition" | "exactMatch") {
    const { tree } = this;
    let currentIndex = 0;
    while (tree[currentIndex]) {
      if (val === tree[currentIndex] && queryType === "exactMatch") {
        break;
      }
      if (val < tree[currentIndex]) {
        currentIndex = currentIndex * 2 + 1;
      } else {
        currentIndex = currentIndex * 2 + 2;
      }
    }
    return currentIndex;
  }

  removeNode(val) {
    // const curIndex = this.traverseTree(val, "exactMatch");
    // console.log("removal index:", curIndex);
    // // collect children of this node to move to new place
    // const runningIndex = curIndex;
    // while (tree[runningIndex]) {
    //   const nextNodeIndex = runningIndex * 2 + 1;
    //   if (tree[nextNodeIndex]) {
    //     // w i p
    //   }
    // }
  }

  searchNode(val) {
    const curIndex = this.traverseTree(val, "exactMatch"); // rtn first exact match
    console.log(`searched Node val "${val}" found at: ${curIndex}`);
  }
}

// TEST Execution
const firstTree = new BST();
console.log("first tree ---", firstTree);

firstTree.addNode(100);
firstTree.addNode(50);
firstTree.addNode(70);
firstTree.addNode(110);
firstTree.addNode(20);
firstTree.addNode(60);
firstTree.searchNode(60);
firstTree.removeNode(70);
