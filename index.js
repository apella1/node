console.log('Controlling the editing of inner context of double enclosing in Vim is interesting');

// using node we can run any javascript file within the terminal and the javascript file extension doesn't have to be included 
// the node modules shouldn't be deployed with the other files - not pushing node modules. 
// when in production, the available dependencies in the package.json file can be be reinstalled using 'npm install' 

import person from './person'; // CommonJS

console.log(__dirname, __filename);

console.log(person);

import Person from './person';

const person1 = new Person ('Malcolm', 88, ['Running', 'Dopamine stimulation', 'Playing piano']);

person1.summary();

console.log(`${person1.name} likes ${person1.hobbies[2]} best.`);

// node is yet to implement the es6 imports

