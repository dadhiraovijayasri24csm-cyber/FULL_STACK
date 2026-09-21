// Import built-in Node.js modules
const os = require("os");
const path = require("path");
const fs = require("fs");

// Display operating system information
console.log("===== OPERATING SYSTEM INFORMATION =====");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Number of CPUs:", os.cpus().length);

// Create a file path using the path module
const filePath = path.join(__dirname, "student.txt");

console.log("\n===== PATH INFORMATION =====");
console.log("File path:", filePath);

// Data to write into the file
const studentData = `
Student Name: Vijayasri
Course: B.Tech CSE (AI & ML)
Subject: Full Stack Web Development
Topic: Node.js Modules
`;

// Write data into the file
fs.writeFileSync(filePath, studentData);

console.log("\nFile created successfully.");

// Read the file
const fileContent = fs.readFileSync(filePath, "utf8");

console.log("\n===== FILE CONTENT =====");
console.log(fileContent);