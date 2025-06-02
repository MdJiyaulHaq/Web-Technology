

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    static draw(radius) {
        console.log(`Drawing a circle with radius: ${radius}`);
    }
}

const c1 = new Circle(5);
console.log(c1.getArea()); // 78.53981633974483
Circle.draw(5); // This will work, but c1.draw(5); will not work
// c1.draw(5); // TypeError: c1.draw is not a function
// c1 is an instance of Circle, but draw is a static method, so it cannot be called on the instance