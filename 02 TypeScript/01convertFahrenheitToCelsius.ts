// convertFahrenheitToCelsius.ts

function fahrenheitToCelsius(fahrenheit: number): number {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example usage:
let tempF = 100;  // input temperature in Fahrenheit
console.log(`${tempF}°F is equal to ${fahrenheitToCelsius(tempF).toFixed(2)}°C`);
