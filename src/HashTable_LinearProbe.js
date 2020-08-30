/* 
  HASH TABLE - LINEAR PROBING
  An implementation of a hash table,
  where, in case of collision, we map over the remaining
  collection (starting from the calculated hash position
  onwards) till we find the value in the collection.

  There are three operations on the hash collection:
  - *.add(arg) - add a value
  - *.find(arg) - search for a value
  - *.remove(arg) = remove the arg from collection
*/

class HashTable {
  constructor(length) {
    this.tableLength = length;
    this.table = new Array(length);
    this.calcHash = this.calcHash.bind(this);
  }

  // Internal func to calc the hash
  // modulus is set at length00, i.e, the array has
  // a length of length00 at max.
  // The prime number `59` is an arbitrary number
  calcHash(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
      sum += val.charCodeAt(i);
    }
    return (sum * 59) % this.tableLength;
  }

  // First we calc the hash from the string
  // Then, if we encounter another value with the
  // same hash, we run a loop to find the next empty
  // space. To ensure we only loop over the size
  // of the collection, we use modulus.
  add(val) {
    const { table, tableLength, calcHash } = this;
    const i = calcHash(val);
    let j = 0;
    if (table[i] !== undefined) {
      while (table[(i + j) % tableLength] !== undefined) {
        ++j;
      }
    }
    table[(i + j) % tableLength] = val;
  }

  // internal func to match argument against collection
  matchValue(val) {
    const { table, tableLength, calcHash } = this;
    const i = calcHash(val);
    let j = 0;
    if (table[i] === val) {
      return [true, i];
    } else {
      while (table[i + j] !== val && j < tableLength) {
        ++j;
      }
      if (table[i + j] === val) {
        return [true, i + j];
      } else {
        return [false];
      }
    }
  }

  find(val) {
    const searchResult = this.matchValue(val);
    if (searchResult[0]) {
      console.log(`"${val}" found at index: ${searchResult[1]}`);
    } else {
      console.log(`"${val}" NOT found :(`);
    }
  }

  remove(val) {
    const searchResult = this.matchValue(val);
    console.log("searchResult:", searchResult);
    if (searchResult[0]) {
      this.table[searchResult[1]] = undefined;
      console.log(`"${val}" at index: ${searchResult[1]} removed`);
    } else {
      console.log(`"${val}" NOT found, so not deleted :(`);
    }
  }
}

// TESTS //

const h1 = new HashTable(20);
console.log("h1 upon initialisation: ", h1);
console.log("--------- ADD ---------");
h1.add("salaam");
h1.add("I am capable");
h1.add("I can do it!");
h1.add("I am blessed!");
h1.add("I am blessed to have a gentle wife!");
h1.add("I am blessed immeasurably");
h1.add("salaam");
h1.add("I like fish!");
console.log("h1 is: ", h1);
console.log("--------- FIND ----------");
h1.find("I am blessed immeasurably");
h1.find("I am not cool!");
h1.find("I am not ok!");
console.log("--------- REMOVE ----------");
h1.remove("I like fish!");
console.log("after removal: ", h1);
