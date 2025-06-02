
// the only function inside the movie object is showActors. [this] inside the callback function references the window/global object and not the movie object. because it's just a regular function.
const movie = {
    title: "Three Idiots",
    actors: ["Aamir", "Maadhavan", "Chatur"],
    showActors() {
        this.actors.forEach(function (actors) {
            console.log(this.title, actors)
        })
    },
};
movie.showActors();


// Solution 4: Use arrow function. It inherits [this]
const movie4 = {
    title: "Three Idiots",
    actors: ["Aamir", "Maadhavan", "Chatur"],
    showActors() {
        this.actors.forEach((actors) => {
            console.log(this.title, actors)
        })
    },
};
movie4.showActors();


// Solution 1: We give this second argument to the forEach method 
const movie1 = {
    title: "Three Idiots",
    actors: ["Aamir", "Maadhavan", "Chatur"],
    showActors() {
        this.actors.forEach(function (actors) {
            console.log(this.title, actors)
        }, this)
    },
};
movie1.showActors();


// Solution 2: Make a copy of [this]
const movie2 = {
    title: "Three Idiots",
    actors: ["Aamir", "Maadhavan", "Chatur"],
    showActors() {
        const self = this;
        this.actors.forEach(function (actors) {
            console.log(self.title, actors)
        })
    },
};
movie2.showActors();


// Solution 3: Append .bind() function to the showActors function
const movie3 = {
    title: "Three Idiots",
    actors: ["Aamir", "Maadhavan", "Chatur"],
    showActors() {
        this.actors.forEach(function (actors) {
            console.log(this.title, actors)
        }.bind(this))
    },
};
movie3.showActors();


