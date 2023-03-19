let queryString = new URLSearchParams(document.location.search);
let strSet = queryString.get('set');

// Check if first and last characters are { and } or throw
// Check if there aren't any spaces between elements and normalize them

const n = strSet.length;

//Remove {}
strSet = strSet.substring(1, n - 1);

let set = strSet.split(',') ?? [];

export let sep = queryString.get('sep') ?? '\u0020';

export function getConverted () {
    return {
        set: set
    };
}
