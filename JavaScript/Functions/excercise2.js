

const circle = {
    radius: 1,
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

console.log(circle.area)

circle.radius = 3;
console.log(circle.area)
