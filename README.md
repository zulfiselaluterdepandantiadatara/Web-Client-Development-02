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
- `task1-temperature.js` - Temperature converter
- `task2-length-converter.js` - Length unit converter
- `task3-even-odd.js` - Even/odd number checker
- `task4-remove-string.js` - String manipulation
- `task5-palindrome.js` - Palindrome checker

### Running JavaScript Files:
```bash
node task1-temperature.js
```

## TypeScript Implementation

The TypeScript implementations add static type checking to the JavaScript solutions.

### Files:
- `task1-temperature.ts` - Temperature converter with type annotations
- `task2-length-converter.ts` - Length unit converter with type annotations
- `task3-even-odd.ts` - Even/odd number checker with type annotations
- `task4-remove-string.ts` - String manipulation with type annotations
- `task5-palindrome.ts` - Palindrome checker with type annotations
- `tsconfig.json` - TypeScript configuration file

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
ts-node task1-temperature.ts

# Or running the compiled JavaScript
node dist/task1-temperature.js
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
