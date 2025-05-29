
const person = {
    firstName: 'Md',
    lastName: "Jiyaul",
    age: 24,
    isMarried: false,
    work: function () {
        console.log("Works at Des Vu Technologies.")
    }
}

const cpyObj = Object.assign({}, person)

const cpyObj2 = Object.assign({ color: "brown" }, person)

const cpyObj3 = { ...person }