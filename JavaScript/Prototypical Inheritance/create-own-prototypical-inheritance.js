
function Shape() {
}
Shape.prototype.getArea = function () {
    console.log("Calculating area");
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // default inheritance from Object
Circle.prototype = Object.create(Shape.prototype); // inherit from Shape
Circle.prototype.constructor = Circle; // reset constructor to Circle, a good practice

const s1 = new Shape();
s1.getArea();
const c1 = new Circle(3);
c1.getArea(); 