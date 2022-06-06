// Combination of 'Union by rank' and 'Path compression'

class UnionFind {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx);
        this.rank = new Array(size).fill(1);
    }
    
    find(node) {
        if (node === this.root[node]) return node;
        return this.root[node] = this.find(this.root[node]);
    }

    union(node1, node2) {
        let rootNode1 = this.find(node1);
        let rootNode2 = this.find(node2);

        if (rootNode1 !== rootNode2) {
            if (this.rank[rootNode1] > this.rank[rootNode2]) {
                this.root[rootNode2] = rootNode1
            } else if (this.rank[rootNode1] < this.rank[rootNode2]) {
                this.root[rootNode1] = rootNode2
            } else {
                this.root[rootNode2] = rootNode1
                this.rank[rootNode1] += 1
            }
        }
    }

    isConnected(node1, node2) {
        return this.find(node1) === this.find(node2)
    }
}