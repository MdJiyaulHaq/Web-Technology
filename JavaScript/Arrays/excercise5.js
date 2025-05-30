

const numbers = [1, 2, 3, 4, 5];

function countOccurrences(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences(numbers, 3)); // Output: 1
