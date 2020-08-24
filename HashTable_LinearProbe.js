/* 
  HASH TABLE - LINEAR PROBING
  An implementation of a hash table,
  where, in case of collision,
  
  There are three operations on the hash collection:
  - *.add(arg) - add a value
  - *.find(arg) - search for a value
  - *.remove(arg) = remove the arg from collection
*/

class HashTable {
  constructor() {
    this.table = new Array(10);
  }

  // internal func to calc the hash
  // modulus is set at 1000, i.e, the array has
  // a length of 1000 at max.
  // The prime number `59` is an arbitrary number
  calcHash(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
      sum += val.charCodeAt(i);
    }
    return (sum * 59) % 10;
  }

  // First we calc the hash from the string
  // Then, if we encounter another value with the
  // same hash, we run a loop to find the next empty
  // space. To ensure we only loop over the size
  // of the collection, we use modulus.
  add(val) {
    const { table, calcHash } = this;
    const i = calcHash(val);
    let j = 0;
    console.log("specifics : ", val, "; i:", i);
    if (table[i] !== undefined) {
      while (table[(i + j) % 10] !== undefined) {
        console.log(val, " --- mod:", (i + j) % 10, "j: ", j);
        ++j;
      }
    }
    table[(i + j) % 10] = val;
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

const h1 = new HashTable();
console.log("h1 upon initialisation: ", h1);
h1.add("salaam");
h1.add("I am capable");
h1.add("I can do it!");
h1.add("I am blessed!");
h1.add("I am blessed to have a gentle wife!");
h1.add("I am blessed immeasurably");
h1.add("salaam");
h1.add("I like fish!");
console.log("h1 is: ", h1);
// h1.find("I am blessed immeasurably");
// h1.find("I am not cool!");
// h1.find("I am not ok!");
// h1.remove("I like fish!");
// console.log("after removal: ", h1);
