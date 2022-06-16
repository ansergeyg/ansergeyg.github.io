function change() {
    let div = document.getElementById("rand_num_container");
    let input = document.getElementById("rand_num_size");
    div.innerText = getRandom(input.value);
}

function getRandom(size) {
  return Math.floor(Math.random() * size);
}
