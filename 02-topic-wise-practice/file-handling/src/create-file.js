const fs = require('fs');

fs.writeFile('newfile.txt', '', (err) => {
    if (err) throw err;
    console.log('File created');
});