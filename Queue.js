class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
    console.log(`"${val}" enqueued to collection,
      now collection is: ${this.queue}`);
  }

  dequeue() {
    const val = this.queue.shift();
    console.log(`"${val}" removed from the collection,
      now collection is: ${this.queue}`);
  }
}

// TESTS //
const testQueue = new Queue();
testQueue.enqueue("10");
testQueue.enqueue("23");
testQueue.enqueue("54");
testQueue.dequeue();
