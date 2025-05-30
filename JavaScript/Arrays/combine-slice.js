
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// Combining two arrays using concat
const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Combining two arrays using spread operator
const combinedArraySpread = [...firstArray, ...secondArray];
console.log(combinedArraySpread); // [1, 2, 3, 4, 5, 6]


// slicing an array
const slicedArray = combinedArray.slice(1, 4);
console.log(slicedArray); // [2, 3, 4] (elements from index 1 to 3)

// slicing an array with negative indices
const slicedArrayNegative = combinedArray.slice(-4, -1);
console.log(slicedArrayNegative); // [3, 4, 5] (elements from index -4 to -2)
