const fs = require('fs');

fs.rmdir('myFolder', (err) => {
    if (err) throw err;
    console.log('Folder removed');
});