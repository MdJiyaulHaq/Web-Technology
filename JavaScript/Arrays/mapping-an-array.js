


const numbers = [3, -1, 8, 4, -2, 5, 7, -3, 6, 1];

const filtered = numbers.filter(function (num) {
    return num >= 0;
});

const squared = filtered.map(function (num) {
    const squared = { value: num ** 2 };
    return squared;
});

console.log(squared);