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
        connectedNodesSize: 0,
      };
    });
  }

  union(val1, val2) {
    const { collection } = this;
    console.log("val1 & val2: ", val1, val2);
    const val1Obj = collection[val1];
    const val2Obj = collection[val2];
    const val1ObjParent = val1Obj.parent;
    const val2ObjParent = val2Obj.parent;
    // Note: we dont need the following `while` loops in path compression
    // loop to find the parent node
    while (val1ObjParent && collection[val1ObjParent].parent) {
      val1ObjParent = collection[val1ObjParent].parent;
    }
    while (val2ObjParent && collection[val2ObjParent].parent) {
      val2ObjParent = collection[val2ObjParent].parent;
    }
    if (val1ObjParent && val1ObjParent === val2ObjParent) {
      val2ObjParent.parent = val1ObjParent;
      val1Obj.connectedNodesSize += 1;
    } else {
      if (val2Obj.connectedNodesSize > val1Obj.connectedNodesSize) {
        val2Obj.parent = val1Obj.val;
        val2Obj.connectedNodesSize += 1;
      } else {
        val1Obj.parent = val2Obj.val;
        val1Obj.connectedNodesSize += 1;
      }
    }
  }

  find(val) {
    const { parent } = this.collection[val];
    console.log("parent val: ", parent);
    return val;
  }
}

const collection = ["b", "f", "c", "q", "w", "p", "g", "j", "l", "u", "y", "a"];
const uf1 = new UnionFind(collection);
console.log("uf1: ", uf1);
uf1.union("b", "c");
console.log("uf1: ", uf1);
uf1.union("f", "q");
console.log("uf1: ", uf1);
uf1.union("c", "f");
console.log("uf1: ", uf1);
uf1.find("b");
