const path = require('path');

// basename - gets base file name 
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object - file name without the extension
console.log(path.parse(__filename));

// concatenating paths 
console.log(path.join(__dirname, 'test', 'hello.html'));