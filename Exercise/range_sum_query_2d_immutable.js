let input = [[[[3,0,1,4,2],
               [5,6,3,2,1],
               [1,2,0,1,5],
               [4,1,0,1,7],
               [1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]];

// var NumMatrix = function(matrix) {};

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix[0]
    }
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            let elem = this.matrix[i][j];
            sum += elem
        }
    }

    return sum
};

var obj = new NumMatrix(input[0])
var param_1 = obj.sumRegion(input[1][0],input[1][1],input[1][2],input[1][3])

console.log(obj.matrix);
console.log(param_1);