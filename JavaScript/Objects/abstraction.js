
// How to abstract methods and properties
function Circle(radius) {
    // let radius = radius;
    this.radius = radius;
    // this.draw = function () {
        //     console.log("draws circle")
        // }
        let draw = function () {
            console.log("draws circle")
    }
}

const circle = new Circle(3);
circle.draw() // throws an error.
