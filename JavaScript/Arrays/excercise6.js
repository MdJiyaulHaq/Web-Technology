

const numbers = [2, 4, 6, 1, 7, 8]

function getMax(array) {
    let max = array[0]; // Initialize max with the first element
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(getMax(numbers));