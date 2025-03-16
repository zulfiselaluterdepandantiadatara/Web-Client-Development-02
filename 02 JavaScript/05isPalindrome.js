// isPalindrome.js

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');  // Remove non-alphanumeric characters
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage:
let word = 'madam';
console.log(`${word} is palindrome: ${isPalindrome(word)}`);  // true
