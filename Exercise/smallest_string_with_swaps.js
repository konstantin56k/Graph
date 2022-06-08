const string = "qdwyt";
const pairs = [[2,3],[3,2],[0,1],[4,0],[3,2]];

class DisjointSet {
    constructor(size) {
        this.root = [... Array(size).keys()];
        this.rank = Array(size).fill(1)
    }

    find(node) {
        if (this.root[node] === node) return node;
        return this.root[node] = this.find(this.root[node]);
    };

    union(nodeA, nodeB) {
        const rootNodeA = this.find(nodeA);
        const rootNodeB = this.find(nodeB);

        if (rootNodeA !== rootNodeB) {
            if (this.rank[rootNodeA] > this.rank[rootNodeB]) {
                this.root[rootNodeB] = rootNodeA
            } else if (this.rank[rootNodeA] < this.rank[rootNodeB]) {
                this.root[rootNodeA] = rootNodeB
            } else {
                this.root[rootNodeB] = rootNodeA;
                this.rank[rootNodeA] ++;
            }
        }
    };

    isConnected(nodeA, nodeB) {
        return this.find(nodeA) === this.find(nodeB);
    };
};

var smallestStringWithSwaps = function(s, pairs) {
    let graph = new DisjointSet(s.length);
    
    // Union() nodes to see how connected elements in a string
    for (let [nodeA, nodeB] of pairs) {
        if (!graph.isConnected(nodeA, nodeB)) {
            graph.union(nodeA, nodeB);
        }
    };

    // Fill out graph.root with root not parents
    for (let i = 0; i < graph.root.length; i++) {
        graph.find(i)
    }

    let output = Array.from(s);
    let hash = {};

    graph.root.map((char, idx) => {
        !hash[char] ? hash[char] = [idx] : hash[char].push(idx)
    });

    for (let component of Object.values(hash)) {
        const characters = component.map((idx) => s[idx]).sort();
        component.forEach((swapIdx, i) => output[swapIdx] = characters[i])
    }

    return output.join('')
};

console.log(smallestStringWithSwaps(string, pairs)); // Output: "dqwyt"