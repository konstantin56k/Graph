// Rank is a node height

class UnionFind {
    constructor(size) {
        this.root = [... Array(size).keys()]
        this.rank = Array(size).fill(1);
    }
    
    /* For the find operation, in the worst-case scenario, when we repeatedly union
    components of equal rank, the tree height will be at most \log(N) + 1log(N)+1,
    so the find operation requires O(\log N)O(logN) time */
    find(node) {
        while (node !== this.root[node]) {
            node = this.root[node]
        }
        return node;
    }

    // Time O(N). In worst case time O(N) because here used find()
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

    // Time O(N). In worst case time O(N) because here used find()
    isConnected(node1, node2) {
        return this.find(node1) === this.find(node2)
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

console.log(graph.rank)

console.log(graph.isConnected(1, 2));