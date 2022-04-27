// Quick find implementation of the Disjoint Set

class UnionFind {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx)
    }
    // Time O(1)
    find(node) {
        return this.root[node]
    }
    /* When we connect one set to another we need to fine all node that 
    connected to old root node ane reassign them to the new root node.
    Time O(N) */
    union(node1, node2) {
        if (this.find(node1) !== this.find(node2)) {
            for (let i = 0; i < this.root.length; i++) {
                if (this.root[i] === this.find(node2)) {
                    this.root[i] = this.find(node1)
                }
            }
        }
    }
    // Time O(1)
    isConnected(node1, node2) {
        if (this.find(node1) === this.find(node2)) {
            return true
        } else {
            return false;
        }
    }
}

let graph = new UnionFind(10);
// 1-2-5-6-7  3-8-9
graph.union(1, 2);
graph.union(2, 5);
graph.union(5, 6);
graph.union(6, 7);
graph.union(3, 8);
graph.union(8, 9);

console.log(graph.isConnected(2, 8));

// 1-2-5-6-7-3-8-9
graph.union(3, 7);


console.log(graph.isConnected(3, 7));
console.log(graph.isConnected(2, 8));