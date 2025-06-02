
function sum(...prices) {
    return prices.reduce((a, b) => a + b);
}

console.log(sum(4, 7, 3, 5, 9))

// Note: the rest operator should be the last paramater
// and try to keep default parameters as right as possible
function sum2(discount, tax = 0.18, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount + tax);
}

console.log(sum2(0.1, 0.2, 4, 7, 3, 5, 9))
console.log(sum2(0.1, undefined, 4, 7, 3, 5, 9))


