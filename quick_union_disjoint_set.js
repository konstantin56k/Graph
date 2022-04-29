// Quick union implementation of the Disjoint Set.
// The difference from quick find is in values stored parent node insteed of root node
// value [0, 1, 2, 3, 4] parent
// index [0, 1, 2, 3, 4] node

class UnionFind {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx)
    }
    
    // Time O(N)
    find(node) {
        while (node !== this.root[node]) {
            node = this.root[node]
        }
        return node;
    }
    // Time O(N). In worst case time O(N) because here used find()
    union(node1, node2) {
        if (this.find(node1) !== this.find(node2)) {
            this.root[this.find(node2)] = this.find(node1)
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
};

let graph = new UnionFind(10);
// 1-2-5  4-6-7  0-3-8-9
graph.union(1, 2);
graph.union(2, 5);

graph.union(4, 6);
graph.union(6, 7);

graph.union(0, 3);
graph.union(3, 8);
graph.union(8, 9);

console.log(graph)


console.log(graph.isConnected(1, 2));

// console.log(graph.root.map(num => graph.find(num)));