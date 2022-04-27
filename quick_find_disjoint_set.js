// Quick find implementation of the Disjoint Set

class UnionFind {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx)
    }

    find(node) {
        return this.root[node]
    }

    union(node1, node2) {
        if (this.find(node1) !== this.find(node2)) {
            this.root[node2] = this.find(node1)
        }
    }

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

console.log(graph.isConnected(1, 4));

graph.union(1, 4);

console.log(graph.isConnected(1, 4));
