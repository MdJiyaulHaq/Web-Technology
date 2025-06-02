
const _radius = Symbol('radius');
const _getArea = Symbol('getArea');
// Using Symbols to create private members
// This is a workaround for private members in JavaScript classes
// Note: This is not true privacy, as Symbols can still be accessed if you know the symbol.
class Circle {
    constructor(radius) {
        // this.radius = radius; // This is a public property
        this[_radius] = radius;
    }
    [_getArea]() {
        console.log('getArea called');
    }
}

const c1 = new Circle(5);