

const numbers = [3, -1, 8, 4, -2, 5, 7, -3, 6, 1];

const allIsPositive = numbers.every(function (num) {
    return num >= 0;
});

console.log(allIsPositive); // false



const hasNegative = numbers.some(function (num) {
    return num < 0;
});
console.log(hasNegative); // true