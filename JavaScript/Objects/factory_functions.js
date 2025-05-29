
// Creating objects in JavaScript

const person = {
    firstName: 'Md',
    lastName: "Jiyaul",
    age: 24,
    isMarried: false,
    work: function () {
        console.log("Works at Des Vu Technologies.")
    }
}

person.work()
// fuctions in JS are dynamic, meaning we can change it's properties and methods

person.age = 25;
person.color = "brown";
person.sleep = function (hours) {
    console.log("sleeps 8 hours a day")
}
delete person.lastName;

// Creating objects using Factory Functions

function createCircle(radius) {
    return {
        radius: radius,
        draw() {
            console.log("draws a circle")
        }
    }
}

const circle1 = createCircle(3);

console.log(circle1);
console.log(circle1.draw());
