import { getConverted, sep } from './api/urlapi.js'
import { getPermutations } from './permutations.js';

export function generate() {

    let params = getConverted();
    let result = [];
    getPermutations(params.set, result, 0);

    let div = document.getElementById('rand_container');
    for (let i = 0; i < result.length; i++) {
        div.textContent += result[i].join(sep) + '\n';
    }
}

export function onCopyButtonClick() {
    const div = document.getElementById('rand_container');
    navigator.clipboard.writeText(div.textContent);
}