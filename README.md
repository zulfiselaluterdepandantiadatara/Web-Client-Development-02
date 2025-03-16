# Basic Programming Tasks

A collection of simple programming tasks implemented in both JavaScript and TypeScript to demonstrate fundamental programming concepts.

## Overview

This repository contains solutions for five basic programming tasks:

1. **Temperature Converter**: Fahrenheit to Celsius conversion
2. **Length Converter**: Centimeter to Kilometer conversion (and vice versa)
3. **Even/Odd Checker**: Determine if a number is even or odd
4. **String Manipulation**: Remove the first occurrence of a substring
5. **Palindrome Checker**: Check if a string reads the same forward and backward

Each task is implemented in both JavaScript and TypeScript to demonstrate the differences and similarities between the two languages.

## JavaScript Implementation

The JavaScript implementations are straightforward and focus on proper variable usage (`let` vs `const`).

### Files:
- `01convertFahrenheitToCelsius.js` - Temperature converter
- `02convertDistance.js` - Length unit converter
- `03isEvenOrOdd.js` - Even/odd number checker
- `04removeFirstOccurrence.js` - String manipulation
- `05isPalindrome.js` - Palindrome checker

### Running JavaScript Files:
```bash
node 01convertFahrenheitToCelsius.js
```

## TypeScript Implementation

The TypeScript implementations add static type checking to the JavaScript solutions.

### Files:
- `01convertFahrenheitToCelsius.ts` - Temperature converter with type annotations
- `02convertDistance.ts` - Length unit converter with type annotations
- `03isEvenOrOdd.ts` - Even/odd number checker with type annotations
- `04removeFirstOccurrence.ts` - String manipulation with type annotations
- `05isPalindrome.ts` - Palindrome checker with type annotations


### Setup TypeScript:
```bash
# Install TypeScript globally (if not already installed)
npm install -g typescript

# Compile TypeScript files
tsc
```

### Running TypeScript Files:
```bash
# Using ts-node (if installed)
ts-node 01convertFahrenheitToCelsius.ts

# Or running the compiled JavaScript
node dist/01convertFahrenheitToCelsius.js
```

## Key Concepts Demonstrated

- Function implementation with proper parameter handling
- Type checking and data validation
- String manipulation and processing
- Basic algorithms and mathematical operations
- Appropriate use of variable declarations (`let` vs `const`)
- TypeScript type annotations and interfaces
- Code organization and structure

## Learning Objectives

This project aims to demonstrate:

1. Basic programming concepts applicable to many languages
2. JavaScript's dynamic typing and flexibility
3. TypeScript's static typing advantages for error prevention
4. Best practices for variable declaration and function implementation
5. How to properly document and structure code

Feel free to explore, modify, and extend these examples for your own learning!
