import { basename, dirname, extname, parse, join } from 'path';

// basename - gets base file name 
console.log(basename(__filename));

// directory name
console.log(dirname(__filename));

// file extension
console.log(extname(__filename));

// create path object - file name without the extension
console.log(parse(__filename));

// concatenating paths 
console.log(join(__dirname, 'test', 'hello.html'));