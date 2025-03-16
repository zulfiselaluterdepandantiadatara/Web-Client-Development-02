# TypeScript Basic Tasks

A collection of simple TypeScript tasks demonstrating fundamental programming concepts with static typing.

## Tasks

1. **Temperature Converter**
   - Converts temperature from Fahrenheit to Celsius
   - File: `01convertFahrenheitToCelsius.ts`

2. **Length Converter**
   - Converts between centimeters and kilometers
   - File: `02convertDistance.ts`

3. **Even/Odd Checker**
   - Determines if a number is even or odd
   - File: `t03isEvenOrOdd.ts`

4. **String Manipulation**
   - Removes the first occurrence of a search string from a string
   - File: `04removeFirstOccurrence.ts`

5. **Palindrome Checker**
   - Checks if a string is a palindrome (reads the same forwards and backwards)
   - File: `05isPalindrome.ts`

## Setup

1. Install dependencies:
```bash
npm install -g typescript ts-node
```

2. Compile TypeScript files:
```bash
tsc
```

This will create JavaScript files in the `dist` directory.

## How to Run

You can run the TypeScript files directly with ts-node:

```bash
ts-node 01convertFahrenheitToCelsius.ts
```

Or run the compiled JavaScript:

```bash
node dist/01convertFahrenheitToCelsius.ts
```

## Key Concepts

- TypeScript static typing
- Type annotations and interfaces
- JavaScript functions with TypeScript syntax
- Conditional statements
- String manipulation
- Proper use of `let` vs `const` variables
- Basic algorithm implementation