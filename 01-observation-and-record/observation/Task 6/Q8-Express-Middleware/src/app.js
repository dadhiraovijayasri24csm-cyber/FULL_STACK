const express = require("express");

const app = express();

const PORT = 3000;

// Custom logging middleware
function requestLogger(req, res, next) {
    const currentTime = new Date().toLocaleString();

    console.log(
        `[${currentTime}] ${req.method} ${req.url}`
    );

    // Pass control to the next middleware or route
    next();
}

// Register the middleware
app.use(requestLogger);

// GET route
app.get("/", (req, res) => {
    res.send(`
        <h1>Express.js Middleware Demo</h1>
        <p>Request logging middleware is working.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});