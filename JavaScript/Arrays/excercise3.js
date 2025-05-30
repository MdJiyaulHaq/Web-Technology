

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function excludes(array, excludeElements) {
    newArray = [];
    for (let element of array) {
        if (!excludeElements.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(excludes(numbers, [5]))
console.log(excludes(numbers, [3, 4]))