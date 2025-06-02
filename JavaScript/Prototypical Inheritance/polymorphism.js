

// Parent Object
function Shape(color) {
    this.color = color;
}
Shape.prototype.getArea = function () {
    console.log("Calculating area");
}

// Child object
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// overriding getArea
Circle.prototype.getArea = function () {
    console.log("Calculating Circle area")
}

// Child object
function Square(length) {
    this.length = length;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
    console.log("Calculating Square area")
}

const s1 = new Shape();
s1.getArea();
const c1 = new Circle(3);
c1.getArea();
const sq1 = new Square(4);
sq1.getArea();