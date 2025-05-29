// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode;
}

function areSame(address1, address2) {
    return address1 == address2
}

let address1 = new Address("Bijaypur", "Pokhara", 33700);
let address2 = new Address("Bijaypur", "Pokhara", 33700);
let address3 = address1;

console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
console.log(areEqual(address1, address2));