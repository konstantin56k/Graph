let logs = [[5,3,2],[3,0,1],[2,2,0],[10,2,4],[0,3,1],[8,3,4]];
let n = 5;

class DisjointSet {
    constructor(size) {
        this.root = [... Array(size).keys()]
        this.rank = Array(size).fill(1)
    }

    find(node) {
        if (this.root[node] === node) return node;
        return this.root[node] = this.find(this.root[node])
    }

    union(nodeA, nodeB) {
        let rootNodeA = this.find(nodeA);
        let rootNodeB = this.find(nodeB);

        if (rootNodeA !== rootNodeB) {
            if (this.rank[rootNodeA] > this.rank[rootNodeB]) {
                this.root[rootNodeB] = rootNodeA
            } else if (this.rank[rootNodeA] < this.rank[rootNodeB]) {
                this.root[rootNodeA] = rootNodeB
            } else {
                this.root[rootNodeB] = rootNodeA
                this.rank[rootNodeA] ++
            }
        }
    }

    isConnected(nodeA, nodeB) {
        return this.find(nodeA) === this.find(nodeB)
    }
};

var earliestAcq = function(logs, n) {
    let sortedLog = [... logs].sort((a, b) => a[0] - b[0])
    let graph = new DisjointSet(n);
    let numOfRoots = n;

    for (let [time, user1, user2] of sortedLog) {
        
        if (!graph.isConnected(user1, user2)) {
            graph.union(user1, user2)
            numOfRoots --;
        }
        
        if (numOfRoots === 1) return time
    };

    return -1
};

console.log(earliestAcq(logs, n))