
// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function () {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// Using ES6 class syntax
class Circle {
    constructor(radius) {
        this.radius = radius; // doesn't go to prototype
    }
    getArea() {   // goes to prototype
        return Math.PI * this.radius * this.radius;
    }
}

const c1 = new Circle(5);
console.log(c1.getArea()); // 78.53981633974483