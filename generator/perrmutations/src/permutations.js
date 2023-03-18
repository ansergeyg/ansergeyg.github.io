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