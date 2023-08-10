const addressLat = 0;
const addressLong = 0;
const positionLat = 5;
const positionLong = 3;

function countDistance(x1, y1, x2, y2) {
    return Math.sqrt(((x1 - x2)**2)+((y1 - y2)**2));
}

const distance = countDistance(positionLat, positionLong, addressLat, addressLong);
console.log(distance);