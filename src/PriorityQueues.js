class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getLeftChildNodeIndex(i) {
    return 2 * i + 1;
  }

  getRightChildNodeIndex(i) {
    return 2 * i + 2;
  }

  getParentNodeIndex(i) {
    if (i % 2) {
      return (i - 1) / 2;
    } else {
      return (i - 2) / 2;
    }
  }

  insert(val) {
    const { queue } = this;
    const length = queue.push(val);
    if (length !== 1) {
      let currentValIndex = length - 1;
      let parentNodeIndex = this.getParentNodeIndex(currentValIndex);
      while (val < queue[parentNodeIndex]) {
        let parentVal = queue[parentNodeIndex];
        // console.log("parentnode:", parentNodeIndex, parentVal);
        queue[parentNodeIndex] = val;
        queue[currentValIndex] = parentVal;
        currentValIndex = parentNodeIndex;
        parentNodeIndex = this.getParentNodeIndex(parentNodeIndex);
      }
    }
  }

  // Removal of highest priority node (index=0) is called polling
  // In polling, we replace the top priority (i = 0), with the
  // highest priority child nodes. We do this by comparing the
  // priorities of left & right child and exchange value with
  // whichever of the left/right is higher priortiy. We keep
  // looping through the sub-tree till be satisfy the `heap
  // invariant` (where every value within the tree is higher
  // priority than its two children (left & right nodes), yet
  // lower priority than its parent node).
  poll() {
    const { queue } = this;
    // remove the top priority value at index 0
    const topPriority = queue[0];
    // new queue has bottom value at top & we shrink the size
    // of the queue as there is one less value
    queue[0] = queue.pop();
    let replacedValIndex = 0;
    let replacedVal = queue[replacedValIndex];
    let leftChildNodeIndex = this.getLeftChildNodeIndex(replacedValIndex);
    let leftChildNodeVal = queue[leftChildNodeIndex];
    let rightChildNodeIndex = this.getRightChildNodeIndex(replacedValIndex);
    let rightChildNodeVal = queue[rightChildNodeIndex];
    console.log(
      "node's immediate tree:",
      replacedValIndex,
      replacedVal,
      "; left child: ",
      leftChildNodeIndex,
      leftChildNodeVal,
      "; right child: ",
      rightChildNodeIndex,
      rightChildNodeVal
    );
    while (
      (replacedVal > leftChildNodeVal) |
      (replacedVal > rightChildNodeVal)
    ) {
      if (rightChildNodeVal < leftChildNodeVal) {
        queue[replacedValIndex] = rightChildNodeVal;
        queue[rightChildNodeIndex] = replacedVal;
        replacedValIndex = rightChildNodeIndex;
        leftChildNodeIndex = this.getLeftChildNodeIndex(replacedValIndex);
        leftChildNodeVal = queue[leftChildNodeIndex];
        rightChildNodeIndex = this.getRightChildNodeIndex(replacedValIndex);
        rightChildNodeVal = queue[rightChildNodeIndex];
      } else {
        queue[replacedValIndex] = leftChildNodeVal;
        queue[leftChildNodeIndex] = replacedVal;
        replacedValIndex = leftChildNodeIndex;
        leftChildNodeIndex = this.getLeftChildNodeIndex(replacedValIndex);
        leftChildNodeVal = queue[leftChildNodeIndex];
        rightChildNodeIndex = this.getRightChildNodeIndex(replacedValIndex);
        rightChildNodeVal = queue[rightChildNodeIndex];
      }
    }
    console.log("Polled val:", topPriority);
  }

  remove() {}

  find() {}
}

// TESTS //
const pq1 = new PriorityQueue();
pq1.insert(3);
pq1.insert(10);
pq1.insert(23);
pq1.insert(7);
pq1.insert(11);
pq1.insert(5);
pq1.insert(13);
pq1.insert(50);
pq1.insert(2);
console.log("=======queue", pq1);
pq1.poll();
console.log("after poll, new tree:", pq1);
pq1.poll();
console.log("after poll, new tree:", pq1);
pq1.poll();
console.log("after poll, new tree:", pq1);
pq1.poll();
console.log("=======queue", pq1);
