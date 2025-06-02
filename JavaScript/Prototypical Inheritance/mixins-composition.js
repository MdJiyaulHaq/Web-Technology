

const canEat = {
    eat: function () {
        console.log("Eating");
    }
};

const canWalk = {
    walk: function () {
        console.log("Walking");
    }
};

const canSwim = {
    swim: function () {
        console.log("Swimming");
    }
};

// create person object using function expression
const person = Object.assign({}, canEat, canWalk, canSwim);
person.eat();  // Output: Eating
person.walk(); // Output: Walking
person.swim(); // Output: Swimming

// Another way is to create a person object using a function constructor
function Person() {
    Object.assign(Person.prototype, canEat, canWalk, canSwim);
}
const john = new Person();
john.eat();  // Output: Eating
john.walk(); // Output: Walking
john.swim(); // Output: Swimming


// we can abstract the object creation into a function
function mixin(target, ...sources) {
    return Object.assign(target, ...sources);
}
// Usage of mixin function
const jane = mixin({}, canEat, canWalk, canSwim);
jane.eat();  // Output: Eating
jane.walk(); // Output: Walking
jane.swim(); // Output: Swimming

