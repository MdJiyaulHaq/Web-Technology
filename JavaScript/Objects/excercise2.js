
// Factory Function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

let address = createAddress("Bijaypur", "Pokhara", 33700)
console.log(address)


// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address2 = new Address("Bijaypur", "Pokhara", 33700)
console.log(address)