const {calcEquation, DisjointSet} = require('./evaluate_division.js');

test('calcEquation() #1:', () => {
    const equations = [["a", "b"], ["b", "c"]];
    const values = [2.0, 3.0];
    const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
    const output = [6.00000, 0.50000, -1.00000, 1.00000, -1.00000];
    expect(calcEquation(equations, values, queries)).toStrictEqual(output);
});
test('calcEquation() #2:', () => {
    const equations = [["a","b"],["b","c"],["bc","cd"]];
    const values = [1.5,2.5,5.0];
    const queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
    const output = [3.75000,0.40000,5.00000,0.20000];
    expect(calcEquation(equations, values, queries)).toStrictEqual(output);
});
test('calcEquation() #3:', () => {
    const equations = [["a","b"]];
    const values = [0.5];
    const queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
    const output = [0.50000,2.00000,-1.00000,-1.00000];
    expect(calcEquation(equations, values, queries)).toStrictEqual(output);
});
test('DisjointSet test rank:', () => {
    const length = 5;
    const set = new DisjointSet(length);
    const outputRank = [1, 1, 1, 1, 1];
    expect(set.rank).toEqual(outputRank);
});
test('DisjointSet test root:', () => {
    const length = 5;
    const set = new DisjointSet(length);
    const defaultRoot = [0, 1, 2, 3, 4];
    expect(set.root).toEqual(defaultRoot);
});
test('DisjointSet test find():', () => {
    const length = 5;
    const set = new DisjointSet(length);
    expect(set.root[0]).toEqual(0);
    set.union(3, 2);
    set.union(3, 1);
    set.union(1, 4);
    set.union(4, 0);
    expect(set.root[0]).toEqual(3);
    expect(set.root[3]).toEqual(3);
    expect(set.root[4]).toEqual(3);
});
test('DisjointSet test union():', () => {
    const length = 5;
    const set = new DisjointSet(length);
    set.union(3, 2);
    set.union(3, 1);
    set.union(1, 4);
    set.union(4, 0);
    const modifiedRoot = [3, 3, 3, 3, 3];
    expect(set.root).toEqual(modifiedRoot);
});