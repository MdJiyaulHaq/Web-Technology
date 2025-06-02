

function sum(a, b) {
    return a + b;
}

console.log(sum(4, 7))

function sum2() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum2(4, 7, 3, 5, 9))