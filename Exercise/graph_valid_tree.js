/* You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges
where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
Return true if the edges of the given graph make up a valid tree, and false otherwise.
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false */

class UF {
    constructor(size) {
        this.root = new Array(size).fill().map((char, idx) => char = idx);
        this.rank = new Array(size).fill(1);
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
}

var validTree = function(n, edges) {
    // from defenition the graph must contain n - 1 edges
    if (edges.length !== n - 1) return false
    let graph = new UF(n);
    
    // Union() modified (added return). If we find a cycle through the edges, we want to stop execution there.
    for (const [x, y] of edges) {
        if (!graph.union(x, y)) return false
    }
    
    return true
};

console.log(validTree(4, [[0,1],[2,3],[1,2]]))
