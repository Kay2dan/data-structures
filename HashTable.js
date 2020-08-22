/* 
  Hash Table
  An implementation of a hash table,
  where, in case of collision, we add the 
  elements into an child array. The array expands
  as more elements as added to this collection.
 */

class HashTable {
  constructor(tableLength) {
    this.table = new Array(tableLength);
    this.tableLength = tableLength;
  }

  calcHash(val) {
    const length = val.length;
    return (length * 59) % this.tableLength;
  }

  add(val) {
    const { table } = this;
    const i = this.calcHash(val);
    if (Array.isArray(table[i])) {
      table[i] = [...table[i], val];
    } else if (table[i] !== undefined) {
      table[i] = [table[i], val];
    } else {
      table[i] = val;
    }
  }

  find(val) {
    const i = this.calcHash(val);
    console.log("length: ", this.tableLength, this.table[i]);
    let cellRef;
    if (this.table[i] === val) {
      console.log(`"${val}" found at index ${i}`);
    } else if (Array.isArray(this.table[i])) {
      this.table[i].find((v, j) => {
        if (v === val) {
          cellRef = j;
        }
      });
      if (cellRef) {
        console.log(`"${val}", found at index: ${`${i}[${cellRef}]`}`);
      } else {
        console.log(`"${val}" not found!`);
      }
    } else {
      console.log(`"${val}" not found!`);
    }
  }

  remove(val) {
    const i = this.calcHash(val);
    const ref = this.table[i];
    if (false && !Array.isArray(ref)) {
      console.log("Removed val:", ref);
    }
    if (Array.isArray(ref)) {
      const ele = ref.find((v) => {
        if (v === val) {
          v = null;
        }
      });
      console.log("Removed ele:", ele);
    }
  }
}

// TESTS //

const h1 = new HashTable(10);
console.log("h1: ", h1);
h1.add("salaam");
h1.add("I am capable");
h1.add("I can do it!");
h1.add("I am blessed!");
h1.add("I am blessed to have a gentle wife!");
h1.add("I am blessed immeasurably");
h1.add("I am ok!");
// h1.remove("I am ok!");
console.log("h1 is: ", h1);
h1.find("I am blessed immeasurably");
h1.find("I am ok!");
h1.find("I am not ok!");
