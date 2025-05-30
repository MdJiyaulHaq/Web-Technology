

const numbers = [3, -1, 8, 4, -2, 5, 7, -3, 6, 1];

const positiveNumbers = numbers.filter(function (num) {
    return num >= 0;
});

console.log(positiveNumbers); 