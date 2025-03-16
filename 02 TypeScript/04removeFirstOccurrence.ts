// removeFirstOccurrence.ts

function removeFirstOccurrence(str: string, searchStr: string): string {
    const index = str.indexOf(searchStr);
    if (index !== -1) {
        return str.slice(0, index) + str.slice(index + searchStr.length);
    }
    return str;  // If searchStr is not found, return the original string
}

// Example usage:
let str = 'Hello World';
let search = 'ell';
console.log(removeFirstOccurrence(str, search));  // "Ho World"
