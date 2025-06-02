

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draws circle");
    }

}
// every time we create an object, we copy draw function.
const c1 = new Circle(3);
const c2 = new Circle(4);


// we can create a prototype(parent) instead
function Circle2(radius) {
    this.radius = radius; // instance member
}
// prototype member
Circle2.prototype.draw = function () {
    console.log("draws circle");
}
const c3 = new Circle2(3);
const c4 = new Circle2(4);