
const address = {
    street: "Bijaypur",
    city: "Pokhara",
    zipcode: 33700
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key])
}

showAddress(address)