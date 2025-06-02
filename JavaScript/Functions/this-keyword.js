// [this] - References the object that is executing the current function 

// If the function is a method ie. play(), [this] references that object itself ie. movie
const movie = {
    title: "Three Idiots",
    play() {
        console.log(this)
    }
};
movie.play();

// Same for Constructor Function
function Picture(title) {
    this.title = title;
    console.log(this)
}
const picture = new Picture("Picture abhi baaki hai mere dost.")




// But, If that function is a regular function, [this] references the global object ie. window object(in browsers) and global object(in node)
function film() {
    console.log(this)
}
film();
