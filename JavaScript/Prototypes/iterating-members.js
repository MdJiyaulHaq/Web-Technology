

// iterating instance and prototype members
function Circle(radius) {
    // instance members
    this.radius = radius;
    this.move = function () {
        console.log("moves circle");
    }
}
// prototype member
Circle.prototype.draw = function () {
    console.log("draws circle");
}
const c1 = new Circle(3);

console.log(Object.keys(c1));  // returns instance members only

for (let key in c1)  // returns all the members 
    console.log(key);