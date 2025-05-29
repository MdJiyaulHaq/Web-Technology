

const person = {
    firstName: 'Md',
    lastName: "Jiyaul",
    age: 24,
    isMarried: false,
    work: function () {
        console.log("Works at Des Vu Technologies.")
    }
}

for (let key in person)
    console.log(key, person[key])

for (let key of Object.keys(person))
    console.log(key, person[key])

for (let entries of Object.entries(person))
    console.log(entries, person[entries])


