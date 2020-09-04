/* Union-Find
  Union-Find is used to map between objects so that we can 
  build connection & verify (for e.g.) a shortest path.
  This exerices will use `path compression`, which an
  opitimisation to 
*/

class UnionFind {
  constructor(collection) {
    this.collection = {};
    collection.forEach((v, i) => {
      this.collection[v] = {
        val: v,
        parent: null,
        size: 0,
      };
    });
  }

  union(val1, val2) {
    const { collection } = this;
    console.log("this.collection: ", this.collection);
    console.log("val1 & val2: ", val1, val2);
    // find parent of val1 & val2
    const val1Obj = collection[val1];
    const val2Obj = collection[val2];
    const val1ObjParent = val1Obj.parent;
    const val2ObjParent = val2Obj.parent;
    // loop to find the parent node
    while (val1ObjParent && collection[val1ObjParent].parent) {
      val1ObjParent = collection[val1ObjParent].parent;
    }
    while (val2ObjParent && collection[val2ObjParent].parent) {
      val2ObjParent = collection[val2ObjParent].parent;
    }
    console.log("parents: ", val1ObjParent, val2ObjParent);
    if (val1ObjParent === val2ObjParent) {
      val2ObjParent.parent = val1ObjParent;
      // val2ObjParent.size =
    } else {
    }
  }

  find() {}
}

const collection = ["b", "f", "c", "q", "w", "p", "g", "j", "l", "u", "y", "a"];
const uf1 = new UnionFind(collection);
uf1.union("b", "c");
