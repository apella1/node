const person = { 
    name: 'John Doe', 
    age: 67,
    hobbies: ['Singing', 4, 'Random walks down the street', 'Programming', 'Playing chess']
}

module.exports = person;

class Person { 
    constructor (name, age, hobbies) {
         this.name = name;
         this.age = age;
         this.hobbies = hobbies;
    } 

    summary () { 
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;

// the const modifier can only be used in typescript files when working with class components.
// this is when trying to have a function expression within the class constructor 

// ? what are module wrapper functions -  wrapped around functions that we do not intend to run

// (function(exports, module, require, __filename, __dirname){

// })
