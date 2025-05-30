
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.includes(5)); // true

function includes(arr, searchElement) {
    for (let element of arr) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}

// Example usage:
console.log(includes(numbers, 9)); // true
console.log(includes(numbers, 11)); // false