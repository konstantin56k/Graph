/* First in a root[] stored parent node. Then find() called,
find() changes what stored in a root[] from parent to root node*/

class UnionFind {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx)
    }
    
    /* For the find, union, and connected operations (the latter two operations both
    depend on the find operation), we need O(1) time for the best case (when the
    parent node for some vertex is the root node itself). In the worst case, it would
    be O(N) time when the tree is skewed. However, on average, the time complexity
    will be O(logN) */

    find(node) {
        if (node === this.root[node]) return node;
        this.root[node] = this.find(this.root[node]);
        return this.root[node]
    }

    union(node1, node2) {
        if (this.find(node1) !== this.find(node2)) {
            this.root[this.find(node2)] = this.find(node1)
        }
    }

    isConnected(node1, node2) {
        return this.find(node1) === this.find(node2)
    }
};

let graph = new UnionFind(10);
// 1-2-5  4-6-7  0-3-8-9
graph.union(1, 2);
graph.union(2, 5);
console.log(graph.root)

graph.union(4, 6);
graph.union(6, 7);

graph.union(0, 3);
graph.union(3, 8);
graph.union(8, 9);

console.log(graph.root)

console.log(graph.isConnected(1, 3));