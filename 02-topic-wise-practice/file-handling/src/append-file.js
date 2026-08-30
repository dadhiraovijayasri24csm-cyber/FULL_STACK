const fs = require('fs');

fs.appendFile('sample.txt', '\nWelcome!', (err) => {
    if (err) throw err;
    console.log('Data appended');
});