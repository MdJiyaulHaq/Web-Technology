
function arrayFromRange(start, end) {
    const arr = [];
    if (start < end) {
        for (let i = start; i <= end; i++)
            arr.push(i);
    }
    return arr;
}

// Example usage:
console.log(arrayFromRange(1, 4)); // [1, 2, 3, 4]
console.log(arrayFromRange(-2, 2)); // [-2, -1, 0, 1, 2]