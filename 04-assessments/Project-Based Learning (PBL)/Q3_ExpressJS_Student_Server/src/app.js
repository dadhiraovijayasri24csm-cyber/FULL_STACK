const express = require("express");

const app = express();
const PORT = 3000;

// Sample student data
const students = [
    { id: 1, name: "Rahul", rollNo: "101" },
    { id: 2, name: "Priya", rollNo: "102" },
    { id: 3, name: "Arjun", rollNo: "103" },
    { id: 4, name: "Kiran", rollNo: "104" },
    { id: 5, name: "Anjali", rollNo: "105" }
];

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Student Server</h1>
        <p>Welcome to the Express.js Student Server.</p>
        <p>Available routes:</p>
        <ul>
            <li><a href="/students">View Students</a></li>
            <li><a href="/about">About Application</a></li>
        </ul>
    `);
});

// Students route
app.get("/students", (req, res) => {
    res.json(students);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Application</h1>
        <p>This application is created using Node.js and Express.js.</p>
        <p>It demonstrates basic routing and HTTP GET requests.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
