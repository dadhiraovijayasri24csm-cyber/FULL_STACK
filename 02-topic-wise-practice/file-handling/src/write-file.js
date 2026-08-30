const fs = require('fs');

fs.writeFile('sample.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});