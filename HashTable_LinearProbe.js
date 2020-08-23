/* 
  Hash Table
  An implementation of a hash table,
  where, in case of collision, we add the 
  elements into an child array. The array expands
  as more elements as added to this collection.
  The class takes a number upon initialisation,
  which creates an array of fixed side. The length
  is also used in the `calcHash` func to calculate
  the hash for each entry in the collection (array).
  
  There are three operations on the hash collection:
  - *.add(arg) - add a value
  - *.find(arg) - search for a value
  - *.remove(arg) = remove the arg from collection
*/

class HashTable {
  constructor(tableLength) {
    this.table = new Array(tableLength);
    this.tableLength = tableLength;
  }

  // internal func to calc the hash
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

  // internal func to match argument against collection
  matchValue(val) {
    const i = this.calcHash(val);
    let cellRef;
    if (this.table[i] === val) {
      return [true, i];
    } else if (Array.isArray(this.table[i])) {
      // we search for the index
      this.table[i].find((v, j) => {
        if (v === val) {
          cellRef = j;
        }
      });
      if (cellRef) {
        return [true, i, cellRef];
      } else {
        return [false];
      }
    } else {
      return [false];
    }
  }

  find(val) {
    const position = this.matchValue(val);
    if (position[0]) {
      console.log(
        `"${val}", found at index: ${position[1]}${
          position[2] ? `[${position[2]}]` : ""
        }`
      );
    } else {
      console.log(`"${val}" *not* found!`);
    }
  }

  remove(val) {
    const position = this.matchValue(val);
    console.log("pos", position);
    if (position[0]) {
      if (position[2]) {
        this.table[position[1]][position[2]] = undefined;
      } else {
        this.table[position[1]] = undefined;
      }
      this.table;
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
h1.add("I like fish!");
console.log("h1 is: ", h1);
h1.find("I am blessed immeasurably");
h1.find("I am ok!");
h1.find("I am not ok!");
h1.remove("I like fish!");
console.log("after removal: ", h1);
