

function sum(...numbers) {
    if (Array.isArray(numbers[0]))
        numbers = [...numbers[0]];
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(3, 4, 1, 7, 9));
console.log(sum([3, 4, 1, 7, 10]));