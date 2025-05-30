
// Finding primitive elements in an array
const numbers = [6, 7, 8, 9, 10];

console.log(numbers.indexOf(8)); // 2
console.log(numbers.indexOf(5)); // -1 (not found)
console.log(numbers.includes(9)); // true
console.log(numbers.lastIndexOf(7)); // 1


// Finding objects in an array
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const person = people.find(function (person) {
    return person.name === 'Bob';
});
// Arrow function equivalent:
// const person = people.find(person => person.name === 'Bob');

console.log(person); // { name: 'Bob', age: 30 }

const personIndex = people.findIndex(function (person) {
    return person.name === 'Charlie';
});
console.log(personIndex); // 2