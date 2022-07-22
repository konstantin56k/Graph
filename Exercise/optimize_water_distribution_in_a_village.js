/* There are n houses in a village. We want to supply water
for all the houses by building wells and laying pipes.
For each house i, we can either build a well inside it directly
with cost wells[i - 1] (note the -1 due to 0-indexing), or pipe
in water from another well to it. The costs to lay pipes between
houses are given by the array pipes where each pipes[j] = [house1j, house2j, costj]
represents the cost to connect house1j and house2j together using a pipe.
Connections are bidirectional, and there could be multiple valid connections
between the same two houses with different costs.
Return the minimum total cost to supply water to all houses. */

var minCostToSupplyWater = function(n, wells, pipes) {
    
};

const n1 = 3;
const wells1 = [1,2,2];
const pipes1 = [[1,2,1],[2,3,1]];

const n2 = 2;
const wells2 = [1,1];
const pipes2 = [[1,2,1],[1,2,2]];

console.log(minCostToSupplyWater(n1, wells1, pipes1)); // 3
console.log(minCostToSupplyWater(n1, wells1, pipes1)); // 2