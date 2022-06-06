
class DisSet {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx)
        this.rank = new Array(size).fill(1)
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

var findCircleNum = function(matrix) {
    let graph = new DisSet(matrix.length)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && i !== j) {
                graph.union(i, j)
            }
        }
    }

    let unique = 0

    for (let i = 0; i < graph.root.length; i ++) {
        if (graph.root[i] === i) {
            unique ++
        } 
    }

    return unique
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))