// The function countTruthy iterates through the array and counts the number of truthy values.
// Truthy values in JavaScript are values that evaluate to true in a boolean context.


let array = [0, 1, 2, false, 4, 5, "6", 7, 8, "", 9, null, undefined, NaN];

function countTruthy(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++;
        }
    }
    return count;
}

console.log(countTruthy(array));
// Output: 9

