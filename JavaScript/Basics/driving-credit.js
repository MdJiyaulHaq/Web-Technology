// Driving credit and penalty points calculator
// This function checks the speed of a vehicle and returns the status based on the speed limit.

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        return "OK";
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }
    }
}

console.log(checkSpeed(77));
