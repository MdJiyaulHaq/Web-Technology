
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}

function Shape(color) {
    this.color = color;
}
Shape.prototype.getArea = function () {
    console.log("Calculating area");
}

function Circle(radius, color) {
    Shape.call(this, color); // will call super constructor
    this.radius = radius;
}
extend(Circle, Shape)

function Square(length, color) {
    Shape.call(this, color); // will call super constructor
    this.length = length;
}
extend(Square, Shape)


const c1 = new Circle(3);
c1.getArea();
const sq1 = new Square(3);
sq1.getArea();

