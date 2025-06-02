


function Shape(color) {
    this.color = color;
}
Shape.prototype.getArea = function () {
    console.log("Calculating area");
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
    console.log("Calculating Circle area")
}

const s1 = new Shape();
s1.getArea();
const c1 = new Circle(3);
c1.getArea(); 