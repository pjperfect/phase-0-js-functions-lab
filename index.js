//Lab: Functions in JavaScript

function calculateTax (amount) {
    return amount * 0.10;
}

function convertToUpperCase (text) {
    return text.toUpperCase();
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome (word) {
    const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        return true;
    }
    else {
        return false;
    }
}

function calculateDiscountedPrice (originalPrice, discountPercentage) {
    return originalPrice * (1 - (discountPercentage/100));
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };