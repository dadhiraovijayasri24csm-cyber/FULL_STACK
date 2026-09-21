// Import the external Lodash package
const _ = require("lodash");

const numbers = [10, 20, 30, 40, 50];

// Calculate sum using Lodash
const sum = _.sum(numbers);

// Find the maximum value
const maximum = _.max(numbers);

// Find the minimum value
const minimum = _.min(numbers);

console.log("Original Array:", numbers);
console.log("Sum:", sum);
console.log("Maximum:", maximum);
console.log("Minimum:", minimum);