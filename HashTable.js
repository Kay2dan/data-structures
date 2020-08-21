class HashTable {
  constructor(tableLength) {
    this.table = new Array(tableLength);
    this.tableLength = tableLength;
  }

  hashFunc(val) {
    const length = val.length;
    const i = (length * 59) % this.tableLength;
    return i;
  }

  add(val) {
    const { table } = this;
    const i = this.hashFunc(val);
    if (Array.isArray(table[i])) {
      table[i] = [...table[i], val];
    } else if (table[i] !== undefined) {
      table[i] = [table[i], val];
    } else {
      table[i] = val;
    }
  }

  remove(val) {
    const i = this.hashFunc(val);
    const ref = this.table[i];
    console.log("ref:", ref);
    if (Array.isArray(ref)) {
      const ele = ref.find((v) => v === val);
      console.log("ele:", ele);
    }
  }

  find(val) {
    const i = this.hashFunc(val);
    console.log(`"${val}", found at index: ${i}`);
  }
}

const hasht1 = new HashTable(10);
console.log("hasht1: ", hasht1);
hasht1.add("salaam");
hasht1.add("I am capable");
hasht1.add("I can do it!");
hasht1.add("I am blessed!");
hasht1.add("I am blessed to have a gentle wife!");
hasht1.add("I am blessed immeasurably");
hasht1.add("I am ok!");
hasht1.remove("I am ok!");
console.log("hasht1 is: ", hasht1);
hasht1.find("I am blessed immeasurably");
