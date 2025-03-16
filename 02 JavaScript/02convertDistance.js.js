// convertDistance.js

function convertDistance(value, unit) {
    let result;
    if (unit === 'cmToKm') {
        result = value / 100000;  // 1 km = 100000 cm
    } else if (unit === 'kmToCm') {
        result = value * 100000;
    } else {
        throw new Error('Invalid unit. Use "cmToKm" or "kmToCm"');
    }
    return result;
}

// Example usage:
let distanceInCm = 100000;  // input distance in cm
console.log(`${distanceInCm} cm is equal to ${convertDistance(distanceInCm, 'cmToKm')} km`);
