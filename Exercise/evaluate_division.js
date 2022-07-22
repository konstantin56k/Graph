/* You are given an array of variable pairs equations and an array of real numbers values,
where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
Each Ai or Bi is a string that represents a single variable. You are also given some queries,
where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
Return the answers to all queries. If a single answer cannot be determined, return -1.0.
Note: The input is always valid. You may assume that evaluating the queries will not result
in division by zero and that there is no contradiction. */

class DisjointSet {
    constructor(array) {
        this.root = {};
        this.parent = {};
        this.rank = {};
        this.values = {};
        [... new Set(array.flat())].forEach(elem => {
            this.root[elem] = elem;
            this.parent[elem] = elem;
            this.rank[elem] = 1;
            this.values[elem] = 1;
        });
        
    };

    find(node) {
        // if (n === graph[n].p) return graph[n]
        // graph[n].p = find(graph[n].p).p
        // graph[n].w *= find(graph[n].p).w
        // return graph[n]

        if  (node === this.root[node]) return node;
        this.root[node] = this.find(this.parent[node]);
        // this.values[node] *= this.values[(this.root[node])]
        return this.root[node];
    };

    union(node1, node2, ratio) {
        const rootNode1 = this.find(node1);
        const rootNode2 = this.find(node2);

        if (rootNode1 !== rootNode2) {
            if (this.rank[rootNode1] > this.rank[rootNode2]) {
                this.root[rootNode2] = rootNode1;
                this.parent[node2] = node1;
            } else if (this.rank[rootNode1] < this.rank[rootNode2]) {
                this.root[rootNode1] = rootNode2;
                this.parent[node1] = node2;
            } else {
                this.root[rootNode2] = rootNode1;
                this.parent[node2] = node1;
                this.rank[rootNode1] += 1;
            };
            this.values[node1] *= ratio
        };
    };
};

var calcEquation = function(equations, values, queries) {
    let set = new DisjointSet(equations);

    // Building a graph
    for (let i = 0; i < equations.length; i++) {
        const [node1, node2] = equations[i];
        set.union(node1, node2, values[i]);
    };

    // If 'equations' valid graph
    if ([... new Set(Object.values(set.root))].length === 1) {

    };
    return {'root': set.root, 'rank': set.rank, 'values': set.values, 'parent': set.parent}
};

const equations = [["a", "b"], ["b", "c"], ["c", "d"]];
const values = [2.0, 3.0, 4.0];
const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
console.log(calcEquation(equations, values, queries));
console.log(__dirname);

module.exports = {
    calcEquation,
    DisjointSet,
}

/* Working method
var calcEquation = function(equations, values, queries) {
    var neighbours = {};

    // Initialise the adjacency list!
    for (var e = 0; e < equations.length; e++){
        neighbours[equations[e][0]] = [];
        neighbours[equations[e][1]] = [];
    }
    for (var e = 0; e < equations.length; e++){
        neighbours[equations[e][0]].push([equations[e][1], values[e]]);
        neighbours[equations[e][1]].push([equations[e][0], 1/values[e]]);
    }
    
    res = [];
    for (e of queries){
        res.push(evaluateExpression(e, neighbours))
    }
    return res;
};


function evaluateExpression(expression, neighboursList){
    if (!(expression[0] in neighboursList) || !(expression[1] in neighboursList)) { return -1; }
    if (expression[0] == expression[1]) { return 1; } 
    
    // Initialise with the expression we want to get! We start with the numerator's children in the queue.
    var q = neighboursList[expression[0]].slice();
    var checked = [];
    
    while (q.length > 0){
        //console.log(q, checked)
        var elem = q.shift();
        
        // If our element is part of the expression, then we're done!
        if (elem[0] == expression[1]){ 
            //console.log("DONE")
            return elem[1] 
        }
        checked.push(elem[0]);
        
        // Otherwise add the neighbours to the queue with updated divisors.
        var neighbours = neighboursList[elem[0]];
        for (var n = 0; n < neighbours.length; n++){
            var nextToCheck = neighbours[n];
            if (checked.includes(nextToCheck[0])){ continue ;}
            q.push([nextToCheck[0], nextToCheck[1]*elem[1]])
        }
    }
    
    
    return -1;
} */