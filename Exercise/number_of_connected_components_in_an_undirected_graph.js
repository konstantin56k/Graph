class DisjointSet {
    constructor(size) {
        this.root = new Array(size).fill().map((char, indx) => char = indx)
        this.rank = new Array(size).fill(1)
    }
    
    find(node) {
        if (this.root[node] === node) return node
        return this.root[node] = this.find(this.root[node])
    }
    
    union(node1, node2) {
        let rootN1 = this.find(node1);
        let rootN2 = this.find(node2);

        // Helps in checking the cycle
        if (rootN1 === rootN2) {
            return false;
        }
        
        if (rootN1 !== rootN2) {
            if (this.rank[rootN1] > this.rank[rootN2]) {
                this.root[rootN2] = rootN1
            } else if (this.rank[rootN1] < this.rank[rootN2]) {
                 this.root[rootN1] = rootN2
            } else {
                this.root[rootN2] = rootN1
                this.rank[rootN1] += 1
            }

            return true
        }
    }

    isConnected(nodeX, nodeY) {
        return this.root[nodeX] === this.root[nodeY]
    }
}

var countComponents = function(n, edges) {
    let graph = new DisjointSet(n)

    for (let [nodeOne, nodeTwo] of edges) {
       graph.union(nodeOne, nodeTwo)
    }
    
    let numOfComponent = 0;
    
    for (let i = 0; i < graph.root.length; i ++) {
        if (graph.root[i] === i) {
            numOfComponent ++
        } 
    }

    return numOfComponent
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]))