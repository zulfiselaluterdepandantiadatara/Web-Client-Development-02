// isEvenOrOdd.ts

function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Example usage:
let num = 1000;
console.log(`${num} isEven: ${isEven(num)}`);  // true

num = 1001;
console.log(`${num} isEven: ${isEven(num)}`);  // false