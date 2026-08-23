// Import readline module
const readline = require("readline");

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate sum
function findSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("\nArray Elements:", numbers);
    console.log("Total Sum:", sum);
}

// Ask user for input
rl.question("Enter numbers separated by commas: ", function (input) {

    // Convert input string into an array of numbers
    let numbers = input.split(",").map(Number);

    // Call function
    findSum(numbers);

    // Close the interface
    rl.close();
});