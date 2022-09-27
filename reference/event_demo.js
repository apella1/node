import EventEmitter from 'events';

//create class
class MyEmitter extends EventEmitter {}

// init object 
const MyEmitter = new MyEmitter();

// event listener 
MyEmitter.on('event', () => console.log('Event Fired'));

// init events 
MyEmitter.emit('event')


// CommonJs modules vs es6 modules