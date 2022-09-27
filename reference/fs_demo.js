// file system

import { writeFile, appendFile, readFile, rename } from 'fs';
import { join } from 'path';

// creating a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => { 
//     if(err) throw err;
//     console.log('Folder created...')
// });

// create and write to a file

writeFile(join(__dirname, '/test', 'hello.txt'), 'Hello World', err => { 
    if(err) throw err;
    console.log('File written to...');

    // append file
    appendFile(join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => { 
        if(err) throw err;
        console.log('File written to...')
    });
});


// * writeFile overwrites the existing content within the file being written into  

// read file

readFile(join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => { 
    console.log(data);
})

// the second parameter of the readFile method is the encoding e.g utf-8

// renaming a file
rename(join(__dirname, '/test', 'hello.txt'), join(__dirname, '/test', 'helloworld.txt'), err => { 
    if (err) throw err;
    console.log('File renamed...');
})