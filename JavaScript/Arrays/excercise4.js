

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

function moveElement(array, index, offset) {
    const newIndex = index + offset;
    if (newIndex < 0 || newIndex >= array.length) {
        return array; // Return the original array if the new index is out of bounds
    }

    const element = array.splice(index, 1)[0]; // Remove the element from the original position
    array.splice(newIndex, 0, element); // Insert it at the new position
    return array;
}

console.log(moveElement(numbers, 0, 2));
console.log(moveElement(numbers, 4, -2));