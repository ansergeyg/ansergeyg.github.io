/*
    Backtracking algorithm.
    Recursively swaps elements to generate all of them.
*/
export function getPermutations(list, result, last) {
    const n = list.length;
    
    if (last === n) {
        result.push([...list]);
        return;
    }

    for (let i = last; i < n; i++) {
        [list[last], list[i]] = [list[i], list[last]];
        getPermutations(list, result, last + 1);
        [list[i], list[last]] = [list[last], list[i]];
    }
}

/*
    Next permutation means lexicographically greater
    Suppose Q and P are permutations then:
    If Q is next after P => P < Q
    and ther is no R such that P < R < Q
    
    Example:
    P = {1, 2, 3} - is lexicographically the smallest one.
    Q = {1, 3, 2} - is next after P and is greater than P.
*/
export function getNextPermutation() {

}