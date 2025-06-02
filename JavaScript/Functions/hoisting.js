// When javascript engine executes this code, it moves all the function declarations to the top of the program. This behaviour is called Hoisting. 

read(); // can call function before declaration

// Function Declaration
function read() {
    console.log("read book")
}


// Function Expression
let study = function () {
    console.log("study")
};

study(); // can't do the same for function expression

