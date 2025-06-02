'use strict';

const Circle = function (radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    }
};

const circle1 = new Circle(5);

// Method Call. circle1.getArea() is bound to circle1
circle1.getArea();

const getArea = circle1.getArea;

// Function Call. getArea is now a standalone function, not bound to circle1
getArea();

// Solution 1: We can use 'use strict' at the top of the file

// solution 2: Define Circle as a class
class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle2 = new Circle2(5);

// Method Call. circle2.getArea() is bound to circle2
circle2.getArea();

const getArea2 = circle2.getArea;
// Function Call. getArea is now a standalone function, not bound to circle2
getArea2(); // This will throw an error in strict mode, as 'this' is undefined