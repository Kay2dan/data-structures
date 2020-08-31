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
      const parentNodeIndex = this.getParentNodeIndex(length - 1);
      while (val < queue[parentNodeIndex]) {
        let parentVal = queue[parentNodeIndex];
        console.log("parentnode:", parentNodeIndex, parentVal);
        queue[parentNodeIndex] = val;
        queue[length - 1] = parentVal;
      }
    }
  }

  // removal of highest priority node (index=0) is called polling
  poll() {
    const { queue } = this;
    // remove the top priority value at index 0
    const topPriority = queue[0];
    // new queue has bottom value at top & we shrink the size
    // of the queue as there is one less value
    queue[0] = queue.pop();
    console.log("queue:::", queue);
    let replacedValIndex = 0;
    let replacedVal = queue[replacedValIndex];
    let leftChildNodeIndex = this.getLeftChildNodeIndex(replacedValIndex);
    let leftChildNodeVal = queue[leftChildNodeIndex];
    console.log(
      ":::",
      replacedVal,
      replacedValIndex,
      leftChildNodeVal,
      leftChildNodeIndex
    );
    while (replacedVal > leftChildNodeVal) {
      queue[replacedValIndex] = leftChildNodeVal;
      queue[leftChildNodeIndex] = replacedVal;
      replacedValIndex = leftChildNodeIndex;
      leftChildNodeIndex = this.getLeftChildNodeIndex(leftChildNodeIndex);
      leftChildNodeVal = queue[leftChildNodeIndex];
      console.log(
        "new ::::",
        replacedVal,
        replacedValIndex,
        leftChildNodeVal,
        leftChildNodeIndex
      );
    }
    console.log("Poll extracted:", topPriority);
  }

  remove() {}

  find() {}
}

// TESTS //
const pq1 = new PriorityQueue();
// console.log("=======queue", pq1);
// console.log("--------About to insert: 3");
pq1.insert(3);
// console.log("=======queue", pq1);
// console.log("--------About to insert: 10");
pq1.insert(10);
// console.log("=======queue", pq1);
// console.log("--------About to insert: 23");
pq1.insert(23);
// console.log("=======queue", pq1);
// console.log("--------About to insert: 7");
pq1.insert(7);
// console.log("=======queue", pq1);
pq1.insert(60);
// console.log("=======queue", pq1);
pq1.insert(2);
console.log("=======queue", pq1);
pq1.poll();
console.log("=======queue", pq1);
