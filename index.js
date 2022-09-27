console.log('Hello from this end of town');

// using node we can run any javascript file within the terminal and the javascript file extension doesn't have to be included 
// the node modules shouldn't be deployed with the other files. when in production, the available dependencies in the package.json file can be be reinstalled using 'npm install' 

const person = require('./person'); // common js

console.log(__dirname, __filename);

console.log(person);

const Person = require('./person');

person1 = new Person ('Malcolm', 88);

person1.summary();
// node is yet to implement the es6 import feature as in other javascript libraries such as react where files are imported from external file paths.


// ! Quokka free edition doesn't support file exports