import { getConverted, sep } from './api/urlapi.js'
import { getPermutations } from './permutations.js';

export function generate() {

    let params = getConverted();
    let result = [];
    getPermutations(params.set, result, 0);

    let div = document.getElementById('rand_container');
    let output = '';
    for (let i = 0; i < result.length; i++) {
        output += result[i].join(sep) + '<br/>';
    }
    div.innerHTML = output;
}

export function onCopyButtonClick() {
    const div = document.getElementById('rand_container');
    navigator.clipboard.writeText(div.textContent);
}