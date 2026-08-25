const fs = require('fs');

fs.rename('newfile.txt', 'data.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
});