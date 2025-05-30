
const numbers = [5, 6, 7, 8, 9, 10];
// Removing elements from an array
console.log(numbers.pop()); // 10 (removes the last element)
console.log(numbers.shift()); // 5 (removes the first element)
console.log(numbers.splice(2, 1)); // [7] (removes 1 element at index 2)

// Empty the array
numbers.length = 0;
console.log(numbers); // [] (array is now empty)