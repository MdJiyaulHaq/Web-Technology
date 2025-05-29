
// Primitives/Value  Types
// String, Number, Boolean, Symbol, undefined, null

// Reference Types
// Object, Function, Array

// Primitives are copied by their value.
let x = 5;
let y = x;

x = 10;

console.log(y)

// Objects are copied by their reference.
let p = { value: 5 }
let q = p;

p.value = 10

console.log(q)