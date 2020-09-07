class Tree {
  constructor() {
    this.tree = {};
  }

  /* 
    Please note, there is no error handling
  */
  add(val, parent) {
    const obj = {
      val,
      parent: parent ? parent : null,
      children: [],
    };
    this.tree[val] = obj;
    if (parent) {
      this.tree[parent].children.push(val);
    }
  }

  remove() {}

  find(val) {
    const obj = this.tree[val];
    console.log("found: ", obj);
    return obj;
  }
}

/* Tests */
const directory = new Tree();
directory.add(5);
directory.add(20, 5);
directory.add(10, 5);
directory.add(15, 10);
console.log("tree:", directory);
