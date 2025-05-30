
const numbers = [3, -1, 8, 4, -2, 5, 7, -3, 6, 1];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(`The sum of the array is: ${sum}`); 
