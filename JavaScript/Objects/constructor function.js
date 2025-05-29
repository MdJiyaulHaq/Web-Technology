
// Creating a constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draws circle")
    }
}

const circle2 = new Circle(3)