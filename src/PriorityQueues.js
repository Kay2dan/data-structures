class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getLeftChildNodeIndex(i) {
    return 2(i) + 1;
  }

  getRightChildNodeIndex(i) {
    return 2(i) + 2;
  }

  getParentNodeIndex(i) {
    console.log(i);
    if (i % 2) {
      return (i - 1) / 2;
    } else {
      return (i - 2) / 2;
    }
  }

  insert(val) {
    const { queue } = this;
    const length = queue.push(val);
    console.log("length of queue:", length);
    if (length !== 1) {
      const parentNodeIndex = this.getParentNodeIndex(length - 1);
      console.log("parentNodeIndex:", parentNodeIndex);
      // while (parentNodeIndex >= 0) {
      let parentVal = queue[parentNodeIndex];
      console.log("parentnode:", parentVal);
      if (val < parentVal) {
        queue[parentNodeIndex] = val;
        queue[length - 1] = parentVal;
      }
      // }
    }
  }

  // removing a node is called polling
  poll() {}

  find() {}
}

// TESTS //
const pq1 = new PriorityQueue();
console.log("=======queue", pq1);
console.log("--------About to insert: 3");
pq1.insert(3);
console.log("=======queue", pq1);
console.log("--------About to insert: 10");
pq1.insert(10);
console.log("=======queue", pq1);
console.log("--------About to insert: 23");
pq1.insert(23);
console.log("=======queue", pq1);
console.log("--------About to insert: 7");
pq1.insert(7);
console.log("=======queue", pq1);
