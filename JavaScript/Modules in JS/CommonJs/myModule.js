
// Implementation details are hidden from the user
const _radius = new WeakMap();  // Using WeakMap to create private members

// Public Interface that users can interact with
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    getArea() {
        return Math.PI * _radius.get(this) * _radius.get(this);
    }
}

const c1 = new Circle(5);
console.log(c1.getArea()); 

module.exports = Circle;  // Exporting the Circle class